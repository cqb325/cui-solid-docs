import type { Tab } from 'solid-repl';

import { transform } from '@babel/standalone';
// @ts-expect-error: 7016
import babelPresetSolid from 'babel-preset-solid';

import dd from 'dedent';

let files: Record<string, string> = {};
let cache: Record<string, string> = {};
let dataToReturn: Record<string, string> = {};

function uid (str: string) {
    return Array.from(str)
        .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
        .toString();
}

function babelTransform (filename: string, code: string) {
    console.log(filename, code);

    const { code: transformedCode } = transform(code, {
        plugins: [
            // Babel plugin to get file import names
            function importGetter () {
                return {
                    visitor: {
                        Import (path: any) {
                            const importee: string = path.parent.arguments[0].value;
                            cache[importee] = path.parent.arguments[0].value = transformImportee(importee);
                        },
                        ImportDeclaration (path: any) {
                            const importee: string = path.node.source.value;
                            cache[importee] = path.node.source.value = transformImportee(importee);
                        },
                        ExportAllDeclaration (path: any) {
                            const importee: string = path.node.source.value;
                            cache[importee] = path.node.source.value = transformImportee(importee);
                        },
                        ExportNamedDeclaration (path: any) {
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
        filename: filename + '.tsx',
    });

    return transformedCode!.replace('render(', 'window.dispose = render(');
}

// Returns new import URL
function transformImportee (fileName: string) {
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

function bundle (entryPoint: string, fileRecord: Record<string, string>) {
    files = fileRecord;
    for (const out in dataToReturn) {
        const url = dataToReturn[out];
        if (url.startsWith('blob:')) URL.revokeObjectURL(dataToReturn[out]);
    }
    cache = {};
    dataToReturn = {};
    dataToReturn[entryPoint] = transformImportee(entryPoint);
    return dataToReturn;
}

function compile (tabs: Tab[], event: string) {
    const tabsRecord: Record<string, string> = {};
    for (const tab of tabs) {
        tabsRecord[`./${tab.name.replace(/.(tsx|jsx)$/, '')}`] = tab.source;
    }
    const bundled = bundle('./main', tabsRecord);
    return { event, compiled: bundled };
}

function babel (tab: Tab, compileOpts: any, id: string) {
    console.log(tab.source);

    const { code } = transform(tab.source, {
        presets: [
            [babelPresetSolid, compileOpts],
            ['typescript', { onlyRemoveTypeImports: true }],
        ],
        filename: tab.name,
    });

    // const code = babelTransform(tab.name, tab.source);

    console.log(code);

    return { event: 'BABEL', id, compiled: code };
}

self.addEventListener('message', ({ data }) => {
    const { event, tabs, id, tab, compileOpts } = data;
    try {
        if (event === 'BABEL') {
            self.postMessage(babel(tab, compileOpts, id));
        } else if (event === 'ROLLUP') {
            self.postMessage(compile(tabs, event));
        }
    } catch (e) {
        self.postMessage({ event: 'ERROR', id, error: e });
    }
});

export {};
