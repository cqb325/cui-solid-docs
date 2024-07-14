import type { Component } from 'solid-js';
import type { editor } from 'monaco-editor';

declare module 'solid-repl' {
    export interface Tab {
    name: string;
    source: string;
  }

  export const defaultTabs: Tab[];

  export type Repl = Component<{
    class?: string;
    classList?: any;
    style?: any;
    formatter: Worker;
    dark: boolean;
    tabs: Tab[];
    id: string;
    current: string | undefined;
    onReady?: (
      editor: editor.IStandaloneCodeEditor,
    ) => void;
    onChange?: (
      code: string
    ) => void;
    onError?: (message: string) => void
    onHeightChange?: (editor: editor.IStandaloneCodeEditor, height: number) => void
  }>;
  const Repl: Repl;
  export default Repl;
}