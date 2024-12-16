export class SymbolTreeNode {
    // 父数据
    parent = null;
    // 上一个兄弟节点
    previousSibling = null;
    // 下一个兄弟节点
    nextSibling = null;
    // 第一个子节点
    firstChild = null;
    // 最后一个子节点
    lastChild = null;
    /** This value is incremented anytime a children is added or removed */
    // 子节点版本
    childrenVersion = 0;
    /** The last child object which has a cached index */
    // 子节点缓存
    childIndexCachedUpTo = null;
    /** This value represents the cached node index, as long as
     * cachedIndexVersion matches with the childrenVersion of the parent */
    // 子节点索引
    cachedIndex = -1;
    // 缓存索引版本
    cachedIndexVersion = NaN; // NaN is never equal to anything

    // 获取当前元素是否被附加到父元素或兄弟元素上
    get isAttached () {
        // 如果当前元素有父元素或前一个兄弟元素或后一个兄弟元素，则返回true，否则返回false
        return Boolean(this.parent || this.previousSibling || this.nextSibling);
    }

    // 获取当前元素是否有子元素
    get hasChildren () {
        return Boolean(this.firstChild);
    }

    childrenChanged () {
        /* jshint -W016 */
        // integer wrap around
        // 儿子版本号加1，并取模0xFFFFFFFF，实现整数循环
        this.childrenVersion = (this.childrenVersion + 1) & 0xFFFFFFFF;
        // 清空缓存
        this.childIndexCachedUpTo = null;
    }

    // 获取缓存的索引
    getCachedIndex (parentNode: SymbolTreeNode) {
        // (assumes parentNode is actually the parent)
        if (this.cachedIndexVersion !== parentNode.childrenVersion) {
                this.cachedIndexVersion = NaN;
                // cachedIndex is no longer valid
                return -1;
        }

        return this.cachedIndex; // -1 if not cached
    }

    setCachedIndex (parentNode: SymbolTreeNode, index: number) {
        // (assumes parentNode is actually the parent)
        // 设置缓存的索引版本为父节点的子节点版本
        this.cachedIndexVersion = parentNode.childrenVersion;
        // 设置缓存的索引为传入的索引
        this.cachedIndex = index;
    }
}
