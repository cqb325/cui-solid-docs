import { isContainerDirective } from "mdast-typeguards";
import { visit } from 'unist-util-visit'

export const remarkCustomBlocks = (options) => {
    return (ast, file) => {
        const classNames = ['sd-custom-block'];
        const types = ['info', 'tip', 'warning', 'danger', 'details'];
        visit(ast, isContainerDirective, (node, index, parent) => {
            if (parent && types.includes(node.name)) {
                let label = (node.name).trim().toUpperCase();
                if (node.children?.[0]?.data?.directiveLabel) {
                    label = node.children?.[0]?.children[0].value;
                    node.children.splice(0, 1);
                }
                const titleNode = node.name === 'details' ? {
                    type: 'mdxJsxFlowElement',
                    name: 'summary',
                    children: [
                        {
                            type: 'text',
                            value: label,
                        }
                    ]
                } : {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'text',
                            value: label,
                        },
                    ],
                    data: { hProperties: { className: [`sd-custom-block-title`] } },
                };
                node.children?.unshift(titleNode);
                node.data = { 
                    hName: node.name === 'details' ? 'details' : 'div',
                    hProperties: { className: [...classNames, `${node.name}-block`] },
                };
            }
        })
    }
}