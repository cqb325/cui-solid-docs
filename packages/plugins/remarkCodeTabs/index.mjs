import { parse } from "node:querystring";
import { visit } from "unist-util-visit";
import * as acorn from 'acorn'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxJsx } from 'micromark-extension-mdx-jsx'
import { mdxJsxFromMarkdown } from 'mdast-util-mdx-jsx'

// import createStyle from "./style.js";

function createTabs(tabs) {
    return {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [
            {
            type: 'mdxJsxAttribute',
            name: 'class',
            value: 'remark-code-tabs'
            }
        ],
        children: []
    }
}

function createTab(node, index) {
  const tabGroup = node.meta.tabs;
  const tabId = `${tabGroup}_${index}`;
  const tabName = node.meta.name;

//   console.log(`<label for="${tabId}" class="remark-code-tab">
//             <input type="radio" id="${tabId}" name="${tabGroup}" ${index === 0 ? "checked" : ""}/>
//             ${tabName}
//         </label>`);

    // let label = fromMarkdown(
    //     `<label for="${tabId}" class="remark-code-tab">
    //         <input type="radio" id="${tabId}" name="${tabGroup}" ${index === 0 ? "checked" : ""}/>
    //         ${tabName}
    //     </label>`
    //     , {
    //         extensions: [mdxJsx({ acorn, addResult: true })],
    //         mdastExtensions: [mdxJsxFromMarkdown()]
    //     });
    // console.log(label.children);
    const inputAttrs = [
        { type: 'mdxJsxAttribute', name: 'type', value: 'radio' },
        { type: 'mdxJsxAttribute', name: 'id', value: tabId },
        { type: 'mdxJsxAttribute', name: 'name', value: tabGroup },
    ];
    if (index === 0) {
        inputAttrs.push({ type: 'mdxJsxAttribute', name: 'checked', value: null });
    }
  return [
    {
        type: 'mdxJsxFlowElement',
        name: 'label',
        attributes: [
            { type: 'mdxJsxAttribute', name: 'for', value: tabId },
            { type: 'mdxJsxAttribute', name: 'class', value: 'remark-code-tab'}
        ],
        children: [
            {
                type: 'mdxJsxFlowElement',
                name: 'input',
                attributes: inputAttrs,
            },
            {
                type: 'paragraph',
                children: [ { type: 'text', value: tabName } ]
            }
        ]
    },
    {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [
            {
            type: 'mdxJsxAttribute',
            name: 'class',
            value: 'remark-code-content'
            }
        ],
        children: [node],
    },
  ];
}

function createPlaceholder({ tabs, name }) {
    let root = fromMarkdown(
        `<hr class="remark-code-tabs-x" rel="${tabs}_${name}" />`
        , {
            extensions: [mdxJsx({ acorn, addResult: true })],
            mdastExtensions: [mdxJsxFromMarkdown()]
        });
  return root.children[0];
}

export function remarkCodeTabs({
  injectStyle,
  metaDelimiter = " ",
} = {}) {
    return function transform(tree, file) {
        const queue = {};

        let styled = false;
        // visit(tree, function (node, index, parent) {
        //     console.log(node);
        // })

        visit(tree, "code", function (node, index, parent) {
            const meta = parse(node.meta ?? "", metaDelimiter);

            if (!meta.tabs) return;

            const newNode = !queue[meta.tabs]
                ? createTabs(meta.tabs)
                : createPlaceholder(meta);

            parent.children[index] = newNode;
            queue[meta.tabs] ??= newNode;

            queue[meta.tabs].children.push(
                ...createTab({ ...node, meta }, queue[meta.tabs].children.length)
            );

            // if (!styled && injectStyle) {
            //     tree.children.unshift({
            //     type: "html",
            //     value: createStyle(injectStyle === "cdn"),
            //     });

            //     styled = true;
            // }
        });
    };
}
