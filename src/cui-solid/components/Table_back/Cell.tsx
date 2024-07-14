import { Match, Show, Switch, createEffect, onMount } from "solid-js";
import { InnerCheckbox } from "../inner/Checkbox";
import { useTableContext, ColumnProps } from ".";
import { Icon } from "../Icon";

export function Cell (props: any) {
    let cell: any;
    const col: ColumnProps = props.column;
    const colIndex: number = props.colIndex;
    const ctx: any = useTableContext();
    onMount(()=>{
        setTimeout(() => {
            updateCellStyle();
        })
    });

    const cellClassList = () => ({
        'cm-table-head-col': props.type === 'th',
        'cm-table-cell-fixed-left-last': col.fixedLeftLast && props.showFixedLeft,
        'cm-table-cell-fixed-right-first': col.fixedRightFirst && props.showFixedRight,
    })

    createEffect(() => {
        col.width;
        col._;
        updateCellStyle();
    });

    const updateCellStyle = () => {
        if (col.fixed && cell) {
            if (col.fixed === 'left') {
                cell.style.position = 'static';
                const parent = cell.closest('.cm-table');
                const head = parent.querySelector('thead');
                const length = head.querySelectorAll('th').length;
                let left = 0;
                for (let i = 1; i <= colIndex; i++) {
                    const th = head.querySelector('th:nth-child('+i+')');
                    if (th) {
                        left += th.getBoundingClientRect().width;
                    }
                }

                cell.style.position =  'sticky';
                cell.style.left = left + 'px';
                cell.style.zIndex = props.type === 'th' ? 3 : 1;
                cell.classList.add('cm-table-cell-fixed-left');
                if (col.fixedLeftLast && props.showFixedLeft) {
                    cell.classList.add('cm-table-cell-fixed-left-last');
                }
            }
            if (col.fixed === 'right') {
                const parent = cell.closest('.cm-table');
                const head = parent.querySelector('thead');
                const length = head.querySelectorAll('th').length;

                let w = 0;
                for (let i = colIndex + 2; i <= length; i++) {
                    const th = head.querySelector('th:nth-child('+i+')');
                    console.log(th);
                    
                    w += th.getBoundingClientRect().width;
                }
                
                cell.style.position =  'sticky';
                cell.style.right = w + 'px';
                cell.style.zIndex = props.type === 'th' ? 3 : 1;
                cell.classList.add('cm-table-cell-fixed-right');
                if (col.fixedRightFirst && props.showFixedRight) {
                    cell.classList.add('cm-table-cell-fixed-right-first');
                }
            }
        }
    }

    // 树型图标
    const treeIcon = (): string => {
        return props.data._showChildren ? 'minus-square' : 'plus-square';
    }

    // 选择框选择事件
    const onRowChecked = (checked: boolean) => {
        ctx && ctx.onRowChecked(props.data, checked);
    }

    // 头部选择框选择事件
    const onHeadChecked = (checked: boolean) => {
        ctx && ctx.onHeadChecked(checked);
    }

    // 点击排序
    const onSort = (sortType: string) => {
        ctx && ctx.onSort(col, sortType);
    }

    // 点击树型展开图标
    const onShowChildren = () => {
        ctx && ctx.onShowChildren(props.data);
    }

    // 展开
    const onExpand = () => {
        ctx && ctx.onExpand(col, props.data);
    }

    // onDragStart
    const onDragStart = (e: any) => {
        ctx && ctx.onDragStart(col, e);
    }

    const text = () => {
        const column = props.column;
        if (props.type === 'td') {
            if (column.type === 'index') {
                return props.index + 1;
            }
            if (column.type === 'checkbox') {
                return <InnerCheckbox disabled={props.data._disabled} checked={props.data._checked} onChange={onRowChecked}/>;
            }
            if (props.data._type === 'expandChildren') {
                return props.data.render ? props.data.render() : null;
            }
            if (column.type === 'expand') {
                return <Icon name='chevron-right' class={`cm-table-expand ${props.data._expand ? 'cm-table-expand-open' : ''}`} onClick={onExpand}/>;
            }
            if (column.render && typeof column.render === 'function') {
                return column.render(props.data[column.name], column, props.data);
            }
            return props.data[column.name];
        } else {
            if (column.type === 'checkbox') {
                return <InnerCheckbox checked={props.checkedAll} onChange={onHeadChecked}/>;
            }
            return props.column.title;
        }
    }
    return <Switch>
        <Match when={props.type === 'th'}>
            <th classList={cellClassList()} ref={cell}>
                <div class="cm-table-cell">
                    {text()}
                    <Show when={col.sort}>
                        <span class='cm-table-sort'>
                            <Icon name='chevron-up' class={col.sortType === 'asc' ? 'cm-table-sort-active' : ''} onClick={onSort.bind(null, 'asc')}/>
                            <Icon name='chevron-down' class={col.sortType === 'desc' ? 'cm-table-sort-active' : ''} onClick={onSort.bind(null, 'desc')}/>
                        </span>
                    </Show>
                    <Show when={col.resize && col.width && ctx && ctx.border}>
                        <span class='cm-table-resize' onMouseDown={onDragStart}></span>
                    </Show>
                </div>
            </th>
        </Match>
        <Match when={props.type === 'td'}>
            <td ref={cell} classList={cellClassList()} colSpan={props.colSpan} rowSpan={props.rowSpan}>
                <div class="cm-table-cell">
                    <Show when={col.tree}>
                        <span class="cm-table-tree-level" style={{"padding-left": `${props.data._level * 16}px`}}></span>
                        <Show when={props.data.children && props.data.children.length} fallback={
                            <span class="cm-table-tree-icon-empty"></span>
                        }>
                            <Icon name={treeIcon()} class="cm-table-tree-icon" onClick={onShowChildren}/>
                        </Show>
                    </Show>
                    {text()}
                </div>
            </td>
        </Match>
    </Switch>
}