import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { mdxjsEsmFromMarkdown } from 'mdast-util-mdxjs-esm'
import { mdxJsx } from 'micromark-extension-mdx-jsx'
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx'
import * as acorn from 'acorn'
import { isDirective } from "mdast-typeguards";
import { mdxjsEsm } from 'micromark-extension-mdxjs-esm'

export function DirectiveDemos(options) {
    return async (ast, file) => {
        let isImportedDemo = false;
        // 处理AST
        visit(ast, isDirective, (node, index, parent) => {
            if (parent && node.name === 'demos') {
                let content;
                if (!isImportedDemo) {
                    const importElement =
                        fromMarkdown(`import { Demos } from 'solid-doc-layout';`, {
                            extensions: [mdxjsEsm({ acorn, addResult: true })],
                            mdastExtensions: [mdxjsEsmFromMarkdown]
                        });
                    ast.children.push(importElement.children[0]);
                    isImportedDemo = true;
                }
                content = node.children;

                const props = node.attributes;

                let included = fromMarkdown(
                    `<Demos columns={${props.columns}}/>`
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
