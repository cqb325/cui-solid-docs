import { transform } from '@babel/standalone';
import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import remarkGfm from 'remark-gfm';
import remarkAttributes from 'remark-attributes';
import remarkDirective from 'remark-directive';
import { DirectiveDemo, DirectiveDemos, Anchors, remarkCustomBlocks, remarkCodeTabs, addCodeCopyButton, SyncOrama } from 'my-remark-plugins';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeShiki from '@shikijs/rehype'
import addClasses from 'rehype-add-classes';

const { default: mdx } = pkg;

function deguggerMDX() {
    return {
        name: 'demo-transform',
        async transform(code, id) {
            if (id && id.endsWith('.mdx')) {
                console.log(id, code);

            }
        }
    }
}


export default defineConfig({
    extensions: ["mdx", "md"],
    server: {
        preset: 'vercel'
    },
    vite: {
        plugins: [
            mdx.withImports({})({
                jsx: true,
                jsxImportSource: "solid-js",
                providerImportSource: "solid-mdx",
                rehypePlugins: [[rehypeSlug, { prefix: 'sp-' }],
                [addClasses, {
                    table: 'sp-table',
                    code: 'sp-inline-code',
                }],
                [rehypeShiki, {
                    // or `theme` for a single theme
                    themes: {
                        light: 'github-light',
                        dark: 'github-dark',
                    }
                }]],
                remarkPlugins: [
                    remarkGfm,
                    [remarkAttributes, { mdx: true }],
                    remarkFrontmatter,
                    remarkMdxFrontmatter,
                    [remarkCodeTabs, { injectStyle: true }],
                    addCodeCopyButton,
                    remarkDirective,
                    DirectiveDemos,
                    [DirectiveDemo, { dir: '/src/cui-comps' }],
                    remarkCustomBlocks,
                    [Anchors, { prefix: 'sp-' }],
                    [SyncOrama, { prefix: 'sp-', url: 'https://cui.cqb325.cn' }]
                ]
            }),
            // deguggerMDX()
        ],
        worker: {
            rollupOptions: {
                output: {
                    entryFileNames: `assets/[name].js`,
                }
            }
        }
    }
});
