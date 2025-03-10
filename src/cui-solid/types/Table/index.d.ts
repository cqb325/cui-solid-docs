import type { JSXElement, Signal } from "solid-js";
import type { PopoverProps } from "../Popover";
declare type KeyType = string | number;
export interface TableProps {
    columns: any[];
    data: any[];
    rowKey?: string;
    height?: number | 'fitContainer';
    classList?: any;
    class?: any;
    style?: any;
    border?: boolean;
    stripe?: boolean;
    highlight?: boolean;
    showHeader?: boolean;
    selectedRowKeys?: Signal<KeyType[]>;
    onRowSelect?: (row: any, preRow: any) => void;
    onRowChecked?: (row: any, checked: boolean) => void;
    onCheckedAll?: (rows: any[]) => void;
    onSort?: (column: any, sortType: any) => void;
    ref?: any;
    size?: 'small';
    spanMethod?: (data: any, column: any, index: number, columnIndex: number) => any;
    showSummary?: boolean;
    summaryMethod?: (columns: ColumnProps[], data: any[]) => any;
    loading?: boolean;
    loadingText?: string | JSXElement;
    title?: JSXElement;
    footer?: JSXElement;
    empty?: JSXElement;
    virtual?: boolean;
}
export declare type TableStore = {
    columns: ColumnProps[];
    columnsRows: any[];
    data: any[];
    showFixedLeft: boolean;
    showFixedRight: boolean;
    checkedAll: boolean | string;
    resizing: boolean;
    headerSize: any;
    summarySize: any;
    headerLeft: number;
    x: number;
    posX: number;
    startX: number;
    resizeId?: string;
};
export interface ColumnProps {
    name?: string;
    title?: string | JSXElement;
    render?: (value: any, column: any, row: any, index: number) => any;
    type?: 'index' | 'date' | 'datetime' | 'enum' | 'checkbox' | 'expand';
    width?: string;
    minWidth?: number;
    maxWidth?: number;
    _width?: number;
    resize?: boolean;
    sort?: boolean | 'custom';
    sortMethod?(a: any, b: any): number;
    sortType?: 'asc' | 'desc' | '';
    fixed?: 'left' | 'right';
    tree?: boolean;
    ellipsis?: boolean;
    tooltip?: boolean;
    tooltipAlign?: PopoverProps['align'];
    tooltipTheme?: PopoverProps['color'];
    tooltipMaxWidth?: number;
    tooltipStyle?: any;
    fixedLeftLast?: boolean;
    fixedRightFirst?: boolean;
    children?: ColumnProps[];
    _colspan?: number;
    _rowspan?: number;
    _parent?: ColumnProps;
    _level?: number;
    id: string;
    _index: number;
    _: string;
}
export declare function Table(props: TableProps): import("solid-js").JSX.Element;
export declare const useTableContext: () => unknown;
export {};
