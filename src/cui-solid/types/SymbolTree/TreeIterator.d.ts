declare const TREE: unique symbol;
declare const ROOT: unique symbol;
declare const NEXT: unique symbol;
declare const ITERATE_FUNC: unique symbol;
export declare class TreeIterator {
    static PREV: number;
    static NEXT: number;
    static PARENT: number;
    static PRECEDING: number;
    static FOLLOWING: number;
    [TREE]: any;
    [ROOT]: any;
    [NEXT]: any;
    [ITERATE_FUNC]: any;
    constructor(tree: any, root: any, firstResult: any, iterateFunction: number);
    next(): {
        done: boolean;
        value: any;
    };
}
export {};
