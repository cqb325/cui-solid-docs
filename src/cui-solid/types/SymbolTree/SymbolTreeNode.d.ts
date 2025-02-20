export declare class SymbolTreeNode {
    parent: null;
    previousSibling: null;
    nextSibling: null;
    firstChild: null;
    lastChild: null;
    /** This value is incremented anytime a children is added or removed */
    childrenVersion: number;
    /** The last child object which has a cached index */
    childIndexCachedUpTo: null;
    /** This value represents the cached node index, as long as
     * cachedIndexVersion matches with the childrenVersion of the parent */
    cachedIndex: number;
    cachedIndexVersion: number;
    get isAttached(): boolean;
    get hasChildren(): boolean;
    childrenChanged(): void;
    getCachedIndex(parentNode: SymbolTreeNode): number;
    setCachedIndex(parentNode: SymbolTreeNode, index: number): void;
}
