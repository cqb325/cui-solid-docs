import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { mdxjsEsmFromMarkdown } from 'mdast-util-mdxjs-esm'
import { mdxjs } from 'micromark-extension-mdxjs'
import { mdxJsx } from 'micromark-extension-mdx-jsx'
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import * as acorn from 'acorn'
import { mdxjsEsm } from 'micromark-extension-mdxjs-esm'
import { toString } from 'hast-util-to-string'
import GithubSlugger from 'github-slugger'

export function Anchors(options) {
    const slugs = new GithubSlugger();
    return async (ast, file) => {
        slugs.reset()
        if (file.history[0].endsWith('.mdx')) {
            const anchors = [];
            const importElement =
                fromMarkdown(`import { SDAnchor } from 'solid-doc-layout';`, {
                    extensions: [mdxjsEsm({ acorn, addResult: true })],
                    mdastExtensions: [mdxjsEsmFromMarkdown]
                });
            ast.children.push(importElement.children[0]);
            // 处理AST
            visit(ast, (node, index, parent) => {
                if (!node) return;
                if (node.type === 'heading') {
                    // console.log(node);
                    const label = toString(node);
                    let id = '';
                    if (node.data?.hProperties?.id) {
                        id = node.data.hProperties.id;
                    } else {
                        id = (options.prefix || '') + slugs.slug(label);
                    }
                    anchors.push({
                        id,
                        depth: node.depth,
                        title: label
                    })
                }
                if (node.type === 'mdxJsxFlowElement' && node.name === 'Demo') {
                    const props = node.attributes;
                    const anchorProps = {};
                    props.forEach(prop => {
                        if (typeof prop.value === 'string') {
                            anchorProps[prop.name] = prop.value;
                        }
                    });
                    anchorProps.depth = 2;
                    anchors.push(anchorProps)
                }
            });

            const exportElement =
                fromMarkdown(`export const _anchors = ${JSON.stringify(anchors)};`, {
                    extensions: [mdxjs()],
                    mdastExtensions: [mdxFromMarkdown()]
                });
            ast.children.push(exportElement.children[0]);

            const anchroNodes = fromMarkdown(
                `<SDAnchor data={_anchors}/>`,
                {
                    extensions: [mdxJsx({ acorn, addResult: true })],
                    mdastExtensions: [mdxJsxFromMarkdown()]
                });

            ast.children.push(anchroNodes.children[0]);
        }
    }
}