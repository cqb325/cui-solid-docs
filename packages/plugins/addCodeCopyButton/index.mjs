import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'

import {mdxjs} from 'micromark-extension-mdxjs'
import {mdxFromMarkdown} from 'mdast-util-mdx'

// const tree = fromMarkdown(`<div class="sd-code-wrap"><button title='拷贝' class='sd-code-copy-button' onClick={() => console.log(1)}></button></div>`, {
//                 extensions: [mdxjs()],
//                 mdastExtensions: [mdxFromMarkdown()]
//             })
//             console.log(tree);

export const addCodeCopyButton = (options) => {
    return (ast, file) => {
        visit(ast, 'code', (node, index, parent) => {
            if (!parent || index == null || node.type !== "code")
                return;
            const language = node.lang || 'md';
            let code = node.value;
            // code = code.replace(/"/gm, '&quot;').replace(/`/gm, '\\`').replace(/\$/gm, '\\$');
            code = encodeURIComponent(code);

            const tree = fromMarkdown(`<div class="sd-code-wrap"><button title='拷贝' class='sd-code-copy-button' onClick={() => window.copy(\`${code}\`)}></button><span class='sd-code-lang'>${language}</span></div>`, {
                extensions: [mdxjs()],
                mdastExtensions: [mdxFromMarkdown()]
            })
            const codeWrap = tree.children[0].children[0];
            codeWrap.children.push(node);
            parent.children[index] = codeWrap;
        })
    }
}