import type { Signal } from "solid-js";
export * from './DropdownMenu';
export * from './DropdownItem';
export declare const useDropdownConext: () => unknown;
type DropdownProps = {
    trigger?: 'hover' | 'click' | 'contextMenu' | 'custom';
    align?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'right' | 'left' | 'rightTop' | 'leftTop';
    classList?: any;
    class?: any;
    style?: any;
    onSelect?: (name: string) => void;
    children: any;
    menu?: any;
    visible?: boolean | Signal<any>;
    transfer?: boolean;
    theme?: 'dark' | 'light';
    disabled?: boolean;
    revers?: boolean;
    handler?: string;
    fixWidth?: boolean;
    ref?: any;
    onBeforeDrop?: (visible: boolean) => boolean;
};
export declare function Dropdown(props: DropdownProps): import("solid-js").JSX.Element;