import type { Signal } from "solid-js";
export interface SpinnerProps {
    classList?: any;
    class?: string;
    size?: 'small' | 'default' | 'large';
    name?: string;
    value?: number | Signal<any>;
    style?: any;
    max?: number;
    min?: number;
    step?: number;
    loop?: boolean;
    placeholder?: string;
    onChange?: (value: number) => void;
    onPlus?: (value: number, step: number) => void;
    onSub?: (value: number, step: number) => void;
    disabled?: boolean;
    asFormField?: boolean;
}
export declare function Spinner(props: SpinnerProps): import("solid-js").JSX.Element;
