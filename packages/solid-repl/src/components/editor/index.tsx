import type { Component} from 'solid-js';
import { createEffect, onMount, onCleanup } from 'solid-js';
import { Uri, languages, editor as mEditor, KeyMod, KeyCode } from 'monaco-editor';
import { liftOff } from './setupSolid';

const Editor: Component<{
  model: mEditor.ITextModel;
  disabled?: true;
  id: string,
  isDark?: boolean;
  withMinimap?: boolean;
  formatter?: Worker;
  displayErrors?: boolean;
  onDocChange?: (code: string) => void;
  onHeightChange?: (editor: mEditor.IStandaloneCodeEditor, height: number) => boolean | undefined;
  onEditorReady?: (
    editor: mEditor.IStandaloneCodeEditor,
    monaco: {
      Uri: typeof Uri;
      editor: typeof mEditor;
    },
  ) => void;
}> = (props) => {
    let parent!: HTMLDivElement;
    let editor: mEditor.IStandaloneCodeEditor;

    if (props.formatter) {
        languages.registerDocumentFormattingEditProvider('typescript', {
            async provideDocumentFormattingEdits (model) {
        props.formatter!.postMessage({
            event: 'FORMAT',
            id: props.id,
            code: model.getValue(),
            pos: editor.getPosition(),
        });

        return new Promise((resolve) => {
          props.formatter!.addEventListener(
              'message',
              ({ data: { id, code } }) => {
                  if (id === props.id) {
                      resolve([
                          {
                              range: model.getFullModelRange(),
                              text: code,
                          },
                      ]);
                  }

              },
              { once: true },
          );
        });
            },
        });
    }
    // if (props.linter) {
    //     const listener = ({ data }: any) => {
    //         if (props.displayErrors) {
    //             const { event } = data;
    //             if (event === 'LINT') {
    //                 mEditor.setModelMarkers(props.model, 'eslint', data.markers);
    //             } else if (event === 'FIX') {
    //                 mEditor.setModelMarkers(props.model, 'eslint', data.markers);
    //                 data.fixed && props.model.setValue(data.output);
    //             }
    //         }
    //     };
    //     props.linter.addEventListener('message', listener);
    //     onCleanup(() => props.linter?.removeEventListener('message', listener));
    // }

    // const runLinter = throttle((code: string) => {
    //     if (props.linter && props.displayErrors) {
    //         props.linter.postMessage({
    //             event: 'LINT',
    //             code,
    //         });
    //     }
    // }, 250);

    // Initialize Monaco
    onMount(() => {
        editor = mEditor.create(parent, {
            model: null,
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            // automaticLayout: true,
            readOnly: props.disabled,
            fontSize: 16,
            lineDecorationsWidth: 5,
            lineNumbersMinChars: 3,
            padding: { top: 15 },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingStrategy: 'advanced',
            overviewRulerLanes: 0,
            minimap: {
                enabled: props.withMinimap,
            },
        });

        props.onEditorReady?.(editor, { Uri, editor: mEditor });

        createEffect(() => {
            editor.updateOptions({ readOnly: !!props.disabled });
        });

        editor.addCommand(KeyMod.CtrlCmd | KeyCode.KeyS, () => {
            // auto-format
            editor.getAction('editor.action.formatDocument')?.run();
            // auto-fix problems
            props.displayErrors && editor.getAction('eslint.executeAutofix')?.run();
            editor.focus();
        });

        editor.onDidChangeModelContent(() => {
            const code = editor.getValue();
            props.onDocChange?.(code);
            // runLinter(code);
        });

        createEffect(() => {
            editor.setModel(props.model);
            liftOff();
        });

        editor.onDidContentSizeChange(() => {
            const contentHeight = Math.min(500, editor.getContentHeight());
            props.onHeightChange?.(editor, contentHeight);
        });
    });
    onCleanup(() => editor.dispose());

    createEffect(() => {
        mEditor.setTheme(props.isDark ? 'vs-dark-plus' : 'vs-light-plus');
    });

    createEffect(() => {
        languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: !props.displayErrors,
            noSyntaxValidation: !props.displayErrors,
        });
    });

    // createEffect(() => {
    //     if (props.displayErrors) {
    //         // run on mount and when displayLintMessages is turned on
    //         runLinter(editor.getValue());
    //     } else {
    //         // reset eslint markers when displayLintMessages is turned off
    //         mEditor.setModelMarkers(props.model, 'eslint', []);
    //     }
    // });

    return <div ref={parent} style={{width: '100%', height: '100%', position: 'relative'}} />;
};

export default Editor;
