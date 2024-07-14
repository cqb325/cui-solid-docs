import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { mdxjsEsmFromMarkdown } from 'mdast-util-mdxjs-esm'
import { mdxJsx } from 'micromark-extension-mdx-jsx'
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx'
import * as acorn from 'acorn'
import { isContainerDirective } from "mdast-typeguards";
import { mdxjsEsm } from 'micromark-extension-mdxjs-esm'
import path from 'node:path';
import fs from 'node:fs';

export function DirectiveDemo(options) {
    return async (ast, file) => {
        let isImportedDemo = false;
        // 处理AST
        visit(ast, isContainerDirective, (node, index, parent) => {
            if (parent && node.name === 'demo') {
                let content;
                if (!isImportedDemo) {
                    const importElement =
                        fromMarkdown(`import { Demo } from 'solid-doc-layout';`, {
                            extensions: [mdxjsEsm({ acorn, addResult: true })],
                            mdastExtensions: [mdxjsEsmFromMarkdown]
                        });
                    ast.children.push(importElement.children[0]);
                    isImportedDemo = true;
                }
                const props = node.attributes;
                let title = '';
                if (node.children[0].data && node.children[0].data.directiveLabel) {
                    const directiveLabelNode = node.children[0];
                    title = directiveLabelNode.children[0]?.value;
                    content = node.children.slice(1, node.children.length);
                } else {
                    content = node.children;
                }
                const demoFile = path.join(file.cwd, options.dir || '', props.src);
                const code = fs.readFileSync(demoFile, 'utf-8').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
                let included = fromMarkdown(
                    `<Demo id='${props.id}' title='${title}' src='${props.src}' code={\`${code}\`} scopes={${props.scopes}}/>`
                    , {
                        extensions: [mdxJsx({ acorn, addResult: true })],
                        mdastExtensions: [mdxJsxFromMarkdown()]
                    });
                const demoNode = included.children[0];
                demoNode.children = demoNode.children.concat(content);
                parent.children[index] = demoNode;

            }
        });
    }
}
