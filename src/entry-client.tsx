// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import '~/cui-solid/styles/cui.css';
import 'cui-solid-icons/style.css';
import FormatterWorker from 'solid-repl/repl/formatter?worker';
import { languages } from 'monaco-editor';
import onigasm from 'onigasm/lib/onigasm.wasm?url';

const solidTypes: Record<string, string> = import.meta.glob('../node_modules/{solid-js,csstype}/**/*.{d.ts,json}', {
    eager: true,
    query: '?raw',
    import: 'default',
});
const solidTypes2: Record<string, string> = import.meta.glob('./cui-solid/**/*.{d.ts,json}', {
    eager: true,
    query: '?raw',
    import: 'default',
});

for (const path in solidTypes) {
    languages.typescript.typescriptDefaults.addExtraLib(solidTypes[path], `file://${path.replace('../', '/')}`);
    languages.typescript.javascriptDefaults.addExtraLib(solidTypes[path], `file://${path}`);
}
for (const path in solidTypes2) {
    languages.typescript.typescriptDefaults.addExtraLib(solidTypes2[path], `file://${path.replace('./', '/node_modules/')}`);
    languages.typescript.javascriptDefaults.addExtraLib(solidTypes2[path], `file://${path}`);
}

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

const tsw = new tsWorker();
const ew = new editorWorker();
window.MonacoEnvironment = {
    getWorker(_moduleId: unknown, label: string) {
        switch (label) {
            case 'typescript':
            case 'javascript':
                return tsw;
            default:
                return ew;
        }
    },
    onigasm,
};

window.formatter = new FormatterWorker();

mount(() => <StartClient />, document.getElementById("app")!);
