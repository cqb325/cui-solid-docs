import { lazy, Show } from 'solid-js';
const Repl = lazy(() => import('solid-repl/src/repl'));
import { useSolidLiveContext } from '.';
import { babel } from 'solid-code-transform/src/index';

export interface SolidLiveEditorProps {
    code?: string
    class?: string
    classList?: any
    style?: any
    sourceMap?: {[k: string] : any}
    onReady?: (editor: any) => void
    onChange?: (code: string) => void
    onHeightChange?: (editor: any, height: number) => void
}

export default function (props: SolidLiveEditorProps) {
    const ctx = useSolidLiveContext();
    if (!ctx) {
        // eslint-disable-next-line solid/components-return-once
        return null;
    }
    const setOutput = ctx.signal[1];

    const tabs = [{
        name: 'demo.tsx',
        source: props.code || ''
    }]

    return <Show when={ctx.signal}><Repl
        formatter={ctx.formatter}
        dark={true}
        tabs={tabs}
        current={'demo.tsx'}
        id={ctx.id}
        {...props}
        onChange={async (source: string) => {
            try {
                const complied: any = await babel(source, ctx.scopes);
                setOutput(complied);
            } catch (e: any) {
                ctx.errorSignal[1](e.message);
            }
        }}
        onHeightChange={props.onHeightChange}
        onError={(message: string) => {
            ctx.errorSignal[1](message);
        }}
    /></Show>
}
