import { createEffect, createSignal, onCleanup } from 'solid-js';
// import { babel } from 'solid-code-transform/src/index';
// import { createMonacoTabs } from './editor/monacoTabs';

import Editor from './editor';
import type { Repl as ReplProps } from 'solid-repl';
// import type { Tab } from 'solid-repl';
import { editor, Uri } from 'monaco-editor';

// const compileMode = {
//     SSR: { generate: 'ssr', hydratable: true },
//     DOM: { generate: 'dom', hydratable: false },
//     HYDRATABLE: { generate: 'dom', hydratable: true },
//     UNIVERSAL: { generate: 'universal', hydratable: false, moduleName: 'solid-universal-module' as string },
// } as const;

// const getImportMap = (tabs: Tab[]): Record<string, string> => {
//     try {
//         const rawImportMap = tabs.find((tab) => tab.name === 'import_map.json');
//         return JSON.parse(rawImportMap?.source ?? '{}');
//     } catch (e) {
//         return {};
//     }
// };

export const Repl: ReplProps = (props) => {
    const { formatter } = props;
    const classList = () => {
        const obj = {
            'solid-live-editor': true,
            ...props.classList
        };
        if (props.class) {
            obj[props.class] = true;
        }
        return obj;
    }

    // const userTabs = () => props.tabs.filter((tab) => tab.name != 'import_map.json');

    // const [importMap, setImportMap] = createSignal(getImportMap(props.tabs), {
    //     equals: (a, b) => JSON.stringify(a) === JSON.stringify(b),
    // });

    // const onCompilerMessage = ({ data }: any) => {
    //     const { event, id, compiled, error } = data;
    //     if (id !== props.id) {
    //         return;
    //     }

    //     if (event === 'ERROR') {
    //         props.onError?.(error.message);
    //     } else {
    //         props.onError?.('');
    //     }

    //     if (event === 'BABEL') {
    //         // outputModel.setValue(compiled);
    //         // setOutput(compiled);
    //         props.onCompiled?.(compiled);
    //     }

    //     if (event === 'ROLLUP') {
    //         const currentMap = { ...importMap() };
    //         for (const file in currentMap) {
    //             // Catch any `jspm.dev` URLs and migrate them to `esm.sh`
    //             if (currentMap[file] === `https://jspm.dev/${file}`) {
    //                 currentMap[file] = `https://esm.sh/${file}`;
    //             }
    //             if (!(file in compiled) && currentMap[file] === `https://esm.sh/${file}`) {
    //                 delete currentMap[file];
    //             }
    //         }
    //         for (const file in compiled) {
    //             if (!(file in currentMap) && !file.startsWith('./')) {
    //                 currentMap[file] = compiled[file];
    //             }
    //         }
    //         console.log(`Compilation took: ${performance.now() - now}ms`);
    //     }
    // };
    // compiler.addEventListener('message', onCompilerMessage);
    // onCleanup(() => compiler.removeEventListener('message', onCompilerMessage));

    /**
   * We need to debounce a bit the compilation because
   * it takes ~15ms to compile with the web worker...
   * Also, real time feedback can be stressful
   */
    // const applyCompilation = throttle((message: any) => {
    //     now = performance.now();

    //     compiler.postMessage(message);
    // }, 250);

    // const compile = (code?: string) => {
    //     now = performance.now();
    //     try {
    //         const ret: any = babel(code || props.tabs[0].source, props.scopes);
    //         props.onCompiled?.(ret);
    //     } catch (e: any) {
    //         props.onError?.(e.message);
    //     }
    //     console.log(`Compilation took: ${performance.now() - now}ms`);
    //     // const compileOpts = compileMode.DOM;
    //     // if (compileOpts === compileMode.UNIVERSAL) {
    //     //     compileOpts = { generate: 'universal', hydratable: false, moduleName: universalModuleName() };
    //     // }

    //     // {
    //     //     event: 'ROLLUP',
    //     //     tabs: unwrap(userTabs()),
    //     //   }
    //     // : {
    //     //     event: 'BABEL',
    //     //     tab: unwrap(props.tabs.find((tab) => tab.name == props.current)),
    //     //     compileOpts,
    //     //   }
    //     // applyCompilation(
    //     //     {
    //     //         event: 'BABEL',
    //     //         id: props.id,
    //     //         tab: unwrap(props.tabs.find((tab) => tab.name == props.current)),
    //     //         compileOpts,
    //     //     }
    //     // );
    // };

    /**
   * The heart of the playground. This recompile on
   * every tab source changes.
   */
    createEffect(() => {
        if (!props.tabs.length) return;
        props.onChange?.(props.tabs[0].source);
        // compile();
    });

    let currentModel: editor.ITextModel | null;
    const outputUri = Uri.parse(`file:///${props.id}/${props.tabs[0].name}.tsx`);
    if (editor.getModel(outputUri)) {
        currentModel = editor.getModel(outputUri);
    } else {
        currentModel = editor.createModel(props.tabs[0].source, 'typescript', outputUri);
    }
    onCleanup(() => {
        currentModel?.dispose();
    });

    // const monacoTabs = createMonacoTabs(props.id, () => props.tabs);
    // const currentModel = createMemo(() => monacoTabs().get(`file:///${props.id}/${props.current}`)!.model);
    const [height, setHeight] = createSignal(300);
    const onHeightChange = (editor: any, height: number) => {
        setHeight(height);
        props.onHeightChange?.(editor, height);
        return true;
    }
    return (
        <div classList={classList()} style={{...props.style, height: height() + 'px'}}>
            <Editor
                model={currentModel!}
                onDocChange={(code: string) => {
                    // compile(code);
                    props.onChange?.(code);
                }}
                formatter={formatter}
                id={props.id}
                isDark={props.dark}
                withMinimap={false}
                onEditorReady={props.onReady}
                onHeightChange={onHeightChange}
                displayErrors={true}
            />
        </div>
    );
};
