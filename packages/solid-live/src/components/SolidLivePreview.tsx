import { createEffect, createSignal } from "solid-js";
import { useSolidLiveContext } from ".";

export interface SolidLivePreviewProps {
    class?: string
    classList?: any
    style?: any
}

export default function SolidLivePreview (props: SolidLivePreviewProps) {
    const ctx = useSolidLiveContext();

    const classList = () => {
        const ret = {
            "solid-live-preview": true,
            ...props.classList
        }
        if (props.class) {
            ret[props.class] = true;
        }
        return ret;
    }

    const [comp, setComp] = createSignal<any>(null);
    const signal = ctx?.signal;
    createEffect(async () => {
        const fn = signal ? signal![0]() : null;
        if (fn) {
            try {
                setComp(fn);
            } catch (e) {
                console.log(e);
                // todo
            }
        } else {
            setComp(null);
        }
    })

    return <div classList={classList()} style={props.style}>{comp()}</div>
}
