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
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        try {
                            if (id.includes("node_modules")) {
                                let name = id.split("node_modules/")[1].split("/");
                                if (name[0] == ".pnpm") {
                                    return name[1];
                                } else {
                                    if (['solid-js', 'solid-js/web', 'solid-js/store'].includes(name[0])) {
                                        return 'solid-vendor';
                                    }
                                    if (['async-validator', 'codesandbox', 'dayjs'].includes(name[0])) {
                                        return 'utils-vendor';
                                    }
                                    if (['monaco-editor'].includes(name[0])) {
                                        return 'monaco-editor-vendor';
                                    }
                                    if (['@babel/core'].includes(name[0])) {
                                        return 'babel-vendor';
                                    }
                                    if (['@babel/'].includes(name[0])) {
                                        return 'babel-vendor';
                                    }
                                    if (['babel-preset-solid'].includes(name[0])) {
                                        return 'babel-preset-solid';
                                    }
                                }
                            }
                            if (id.includes('cui-solid/')) {
                                return 'cui-solid';
                            }
                            if (id.includes('cui-solid-icons/')) {
                                return 'cui-solid-icons';
                            }
                            if (id.includes('solid-live/')) {
                                return 'solid-live';
                            }
                            if (id.includes('solid-repl/')) {
                                return 'solid-repl';
                            }
                            if (id.includes('solid-code-transform/')) {
                                return 'solid-code-transform';
                            }
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            }
        }
    }
});
