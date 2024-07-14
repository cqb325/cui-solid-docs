import { getParameters } from 'codesandbox/lib/api/define';

export function openSandbox (code: string, title: string) {
    const parameters = getParameters({
        files: {
            'src/index.html': {
                content: `<!DOCTYPE html>
                        <html>
                        <head>
                            <title>${title}</title>
                            <meta charset="UTF-8" />
                        </head>

                        <body>
                            <div id="app"></div>

                            <script src="./index.tsx" type="module"></script>
                        </body>
                        </html>`,
                isBinary: false,
            },
            'src/index.tsx': {
                content: `import { render } from "solid-js/web";
import "cui-solid/dist/styles/cui.css";
import App from "./demo";
render(() => <App />, document.getElementById("app"));`,
                isBinary: false,
            },
            'src/demo.tsx': {
                content: code,
                isBinary: false,
            },
            'package.json': {
                content: {
                    "name": title,
                    "version": "1.0.0",
                    "description": title,
                    "scripts": {
                        "start": "parcel ./src/index.html",
                        "build": "parcel build ./src/index.html"
                    },
                    "dependencies": {
                        "solid-js": "^1.8.16",
                        "cui-solid": "latest",
                    },
                    "devDependencies": {
                        "@babel/core": "^7.18.13",
                        "babel-preset-solid": "^1.8.16",
                        "parcel": "^2.0.0"
                    }
                }
            },
            'tsconfig.json': {
                content: {
                    "compilerOptions": {
                        "jsx": "preserve",
                        "jsxImportSource": "solid-js"
                    }
                }
            },
            ".babelrc": {
                content: {
                    "presets": ["babel-preset-solid"]
                }
            }
        },
    });
    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
    window.open(url, "_blank");
}