import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'
import fs from 'fs'
import path from 'path'
import { parseSectionFromURL, URLToAnchorPath } from './utils.mjs';

export function SyncOrama(options) {
    const slugs = new GithubSlugger();
    return async (ast, file) => {
        slugs.reset()
        if (file.history[0].endsWith('.mdx')) {
            const pagePath = file.history[0].split('/src/routes')[1].replace('.mdx', '');
            if (pagePath.endsWith(']')) return;
            const url = options.url + pagePath;
            let currentHeaderText = '';
            let currentHeaderSlug = '';
            let currentContent = '';
            let category = '';
            const results = [];

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
                    if (currentHeaderText && currentContent) {
                        results.push({
                            title: currentHeaderText,
                            content: currentContent.trim(),
                            path: URLToAnchorPath(url, currentHeaderSlug),
                            category,
                            section: parseSectionFromURL(url),
                        })
                    }
                    currentHeaderText = label;
                    currentHeaderSlug = id;
                    currentContent = '';
                } else if (node.type === 'mdxJsxFlowElement' && node.name === 'Demo') {
                    if (currentHeaderText && currentContent) {
                        results.push({
                            title: currentHeaderText,
                            content: currentContent.trim(),
                            path: URLToAnchorPath(url, currentHeaderSlug),
                            category,
                            section: parseSectionFromURL(url),
                        })
                    }
                    currentHeaderText = '';
                    currentContent = '';
                    const props = node.attributes;
                    const anchorProps = {};
                    props.forEach(prop => {
                        anchorProps[prop.name] = prop.value;
                    });
                    const desc = toString(node);
                    results.push({
                        title: anchorProps.title,
                        content: `${desc}\n\n ${anchorProps.code.value}`,
                        path: URLToAnchorPath(url, anchorProps.id),
                        category,
                        section: parseSectionFromURL(url),
                    })
                } else {
                    currentContent += toString(node);
                }
            });

            if (currentHeaderText && currentContent) {
                results.push({
                    title: currentHeaderText,
                    content: currentContent.trim(),
                    path: URLToAnchorPath(url, currentHeaderSlug),
                    category,
                    section: parseSectionFromURL(url),
                })
            }

            if (!fs.existsSync(path.resolve(`.orama${pagePath}.json`))) {
                fs.mkdirSync(path.dirname(path.resolve(`.orama${pagePath}.json`)), { recursive: true })
                fs.writeFileSync(path.resolve(`.orama${pagePath}.json`), JSON.stringify(results, null, 4))
            }
        }
    }
}