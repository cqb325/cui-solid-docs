import type { Signal } from "solid-js";
import { createContext, createEffect, createSignal, useContext } from "solid-js"
import SolidLiveEditor from './SolidLiveEditor';
import SolidLivePreview from './SolidLivePreview';

export interface SolidLiveProps {
    children?: any
    formatter?: any
    linter?: any
    id: string
    scopes?: any
}

export interface SolidLiveContextProps {
    sourceMap?: {[k: string] : any}
    signal: Signal<string>
    errorSignal: Signal<string>
    formatter?: any
    linter?: any
    id: string,
    scopes?: any
}

const SolidLiveContext = createContext<SolidLiveContextProps>();

function SolidLive (props: SolidLiveProps) {
    const [output, setOutput] = createSignal<any>(null);
    const [error, setError] = createSignal<any>(null);

    createEffect(() => {
        if (error()) {
            console.error(error());
        }
    })
    return <SolidLiveContext.Provider value={{signal: [output, setOutput], errorSignal: [error, setError], ...props}}>
        {props.children}
    </SolidLiveContext.Provider>
}

export const useSolidLiveContext = () => useContext(SolidLiveContext);

export default SolidLive;
