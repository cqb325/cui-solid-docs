import type { JSXElement, Signal } from "solid-js";
export interface TimePickerProps {
    classList?: any;
    class?: any;
    type?: 'timeRange';
    disabled?: boolean;
    theme?: 'light' | 'dark';
    size?: 'small' | 'large';
    clearable?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    format?: string;
    value?: string | Date | string[] | Date[] | Signal<any>;
    prepend?: string | JSXElement;
    disabledTime?: (num: number, type: string) => boolean;
    minuteStep?: number;
    secondStep?: number;
    hourStep?: number;
    header?: string | JSXElement | string[] | JSXElement[];
    footer?: string | JSXElement | string[] | JSXElement[];
    seperator?: string;
    transfer?: boolean;
    trigger?: () => any;
    asFormField?: boolean;
    placeholder?: string;
    onChange?: (value: any) => void;
}
export declare function Timepicker(props: TimePickerProps): import("solid-js").JSX.Element;
export declare const useTimepickerContext: () => unknown;
