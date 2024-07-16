import { transform } from '@babel/standalone';
// @ts-expect-error: 7016
import babelPresetSolid from 'babel-preset-solid';

import * as solidCore from 'solid-js';
import * as solidWeb from 'solid-js/web';
import * as solidStore from 'solid-js/store';
import * as cuiSolid from 'cui-solid';
// import * as cuiVirtualList from "cui-virtual-list";

import dd from 'dedent';

const files: Record<string, string> = {};
const cache: Record<string, string> = {};
const dataToReturn: Record<string, string> = {};

function uid(str: string) {
    return Array.from(str)
        .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
        .toString();
}

function babelTransform(code: string, parsedScopes: any) {
    const { code: transformedCode } = transform(code, {
        plugins: [
            // Babel plugin to get file import names
            function importGetter() {
                return {
                    visitor: {
                        Import(path: any) {
                            const importee: string = path.parent.arguments[0].value;
                            cache[importee] = path.parent.arguments[0].value = transformImportee(importee);
                        },
                        ImportDeclaration(path: any) {
                            const source = path.node.source.value;
                            path.node.specifiers.forEach((specifier: any) => {
                                const localKey: string = specifier.local.name;
                                const realKey: string = specifier.imported ? specifier.imported.name : localKey;
                                parsedScopes.push({
                                    source,
                                    realKey,
                                    localKey,
                                })
                            });
                            path.remove();
                            // const importee: string = path.node.source.value;
                            // cache[importee] = path.node.source.value = transformImportee(importee);
                        },
                        ExportAllDeclaration(path: any) {
                            const importee: string = path.node.source.value;
                            cache[importee] = path.node.source.value = transformImportee(importee);
                        },
                        ExportNamedDeclaration(path: any) {
                            const importee: string = path.node.source?.value;
                            if (importee) {
                                cache[importee] = path.node.source.value = transformImportee(importee);
                            }
                        },
                    },
                };
            },
        ],
        presets: [
            [babelPresetSolid, { generate: 'dom', hydratable: false }],
            ['typescript', { onlyRemoveTypeImports: true }],
        ],
        filename: 'demo.tsx',
    });

    return transformedCode;
}

// Returns new import URL
function transformImportee(fileName: string) {
    // There's no point re-visiting a node again, as it's already been processed
    if (fileName in cache) {
        return cache[fileName];
    }
    console.log(fileName);
    if (!fileName) {
        return '';
    }

    // Base cases
    if (fileName.includes('://') || !fileName.startsWith('.')) {
        if (fileName.endsWith('.css')) {
            const id = uid(fileName);
            const js = dd`
        (() => {
          let link = document.getElementById('${id}');
          if (!link) {
            link = document.createElement('link')
            link.setAttribute('id', ${id})
            document.head.appendChild(link)
          }
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('href', '${fileName}')
        })()
      `;
            const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }));
            return url;
        }
        if (fileName.includes('://')) return fileName;
        else {
            dataToReturn[fileName] = `https://esm.sh/${fileName}`;
            return fileName;
        }
    }
    if (fileName.endsWith('.css')) {
        const contents = files[fileName];
        const id = uid(fileName);
        const js = dd`
    (() => {
      let stylesheet = document.getElementById('${id}');
      if (!stylesheet) {
        stylesheet = document.createElement('style')
        stylesheet.setAttribute('id', ${id})
        document.head.appendChild(stylesheet)
      }
      const styles = document.createTextNode(\`${contents}\`)
      stylesheet.innerHTML = ''
      stylesheet.appendChild(styles)
    })()
  `;
        const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }));
        return url;
    }

    // Parse file and all its children through recursion
    cache[fileName] = ''; // Prevent infinite recursion
    const js = babelTransform(fileName, files[fileName]);
    const url = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }));
    return url;
}

export function babel(sourceCode: string, scopes?: any) {
    const parsedScopes: any = [];
    const code = babelTransform(sourceCode, parsedScopes)
        ?.replace(/export\s+default\s+/g, 'return ');
    const scopeKeys: string[] = [];
    const scopeValues = parsedScopes.map((scope: any) => {
        scopeKeys.push(scope.localKey);
        if (scope.source === 'solid-js' && scope.realKey in solidCore) {
            return solidCore[scope.realKey as keyof typeof solidCore];
        }
        if (scope.source === 'solid-js/web' && scope.realKey in solidWeb) {
            return solidWeb[scope.realKey as keyof typeof solidWeb];
        }
        if (scope.source === 'solid-js/store' && scope.realKey in solidStore) {
            return solidStore[scope.realKey as keyof typeof solidStore];
        }
        if (scope.source === 'cui-solid' && scope.realKey in cuiSolid) {
            return cuiSolid[scope.realKey as keyof typeof cuiSolid];
        }
        // if (scope.source === 'cui-virtual-list' && scope.realKey in cuiVirtualList) {
        //     return cuiVirtualList[scope.realKey as keyof typeof cuiVirtualList];
        // }
        if (scope.realKey in scopes) {
            return scopes[scope.realKey as keyof typeof scopes];
        }
        return null;
    })
    const ret = () => {
        const fn = new Function(...scopeKeys, code!);
        return fn.apply(globalThis, [...scopeValues]);
    }
    return ret;
}

// self.addEventListener('message', ({ data }) => {
//     const { code, id, scopes } = data;
//     try {
//         self.postMessage(babel(id, code, scopes));
//     } catch (e) {
//         self.postMessage({ event: 'ERROR', id, error: e });
//     }
// });
