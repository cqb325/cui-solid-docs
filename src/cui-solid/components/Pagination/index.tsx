import { Select, Option } from "../FormElements/Select";
import { Input } from "../FormElements/Input";
import { PagePrev } from "./PagePrev";
import { PageNext } from "./PageNext";
import { PageItem } from "./PageItem";
import { useClassList } from "../utils/useProps";
import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";

const pages = [
    {value: 10, label: '10条/页'},
    {value: 20, label: '20条/页'},
    {value: 50, label: '50条/页'},
    {value: 100, label: '100条/页'}
];

export interface PaginationProps {
    classList?: any
    class?: any
    shape?: 'normal'|'circle'
    size?: 'small'|'large'
    current: number
    total: number
    pageSize: number
    onChange?: (page: number, pageSize: number) => void
    onChangePageSize?: (pageSize: number) => void
    innerNear?: number
    displayedPages?: number
    startEndShowNum?: number
    showNums?: boolean
    mini?: boolean
    style?: any
    showTotal?: boolean
    showPage?: boolean
    showJumper?: boolean
    pages?: any[]
}

export function Pagination (props: PaginationProps) {
    const classList = () => useClassList(props, 'cm-pagination', {
        [`cm-pagination-${props.shape }`]: props.shape ,
        [`cm-pagination-${props.size}`]: props.size
    });

    const current = () => props.current;
    const total = () => props.total ?? 0;
    const pageSize = () => props.pageSize ?? 10;
    const PAGE_SHOW_MAX = 7;
    const REST_PAGE_MAX_SIZE = 5;
    const showNums = props.showNums ?? true;
    const showTotal = props.showTotal ?? true;
    const ps = props.pages ?? pages;

    const showJumper = props.showJumper ?? true;
    const showPage = props.showPage ?? true;

    const [pageNum, setPageNum] = createSignal(current());

    createEffect(() => {
        if (current() != pageNum()) {
            setPageNum(current());
        }
    });

    const prev = () => {
        if (current() > 1) {
            _handleChange(current() - 1);
        }
    };

    const next = () => {
        if (current() < _calcPage()) {
            _handleChange(current() + 1);
        }
    };

    const gotoPage = (v: string) => {
        _handleChange(parseInt(v, 10));
    }

    const _calcPage = () => {
        // 没数据的时候默认为第一页
        if (total() === 0) {
            return 1;
        }
        return Math.floor((total() - 1) / pageSize()) + 1;
    };

    const _isValid = (page: number) => {
        return typeof page === 'number' && page >= 1;
    }

    /**
     * 页号改变
     * @method _handleChange
     * @param p 当前页号
     * @returns {*}
     * @private
     */
    const _handleChange = (p: number) => {
        let page = p;
        if (_isValid(page) && page !== current()) {
            if (page > _calcPage()) {
                page = _calcPage();
            }

            setPageNum(page);
            if (props.onChange) {
                props.onChange(page, pageSize());
            }
        }
    }

    const onChangePageSize = (size: number) => {
        const totalPages = Math.floor((total() - 1) / size) + 1;
        props.onChangePageSize && props.onChangePageSize(size);
        if (current() > totalPages) {
            setPageNum(1);
            if (props.onChange) {
                props.onChange(1, pageSize());
            }
        }
    }

    function getPageNumbers () {
        let pageList = [];
        let restLeftPageList: number[] = []; // pages before ...
        let restRightPageList: number[] = []; // pages after ...
        /** Pager truncation logic (t is the total number of pages, c is the current page):
            - No need to truncate when t<=7 pages
            - When t>7
                - When c<4, the fourth is a truncation symbol (...)
                - When c=4, the sixth is the truncation symbol (...)
                - When 4<c<t-3, the second and sixth are truncation symbols (...)
                - When t-3<=c<=t, the second is the truncation symbol (...), followed by the 5th from the bottom-the 1st from the bottom
            Truncation character + number, the total number is 7

            分页器截断逻辑（t为总页数，c为当前页）：
            - t<=7 页的时候不需要截断
            - 当 t>7 时
                - 当 c<4 时，第4个为截断符号（...）
                - 当 c=4 时，第6个为截断符号（...）
                - 当 4<c<t-3 时，第2个与第6个为截断符号（...）
                - 当 t-3<=c<=t 时，第 2 个为截断符号（...），后面为倒数第5个-倒数第1个
            截断符+数字 总共个数为7个
        */
        const totalPageNum = _calcPage();
        if (totalPageNum <= PAGE_SHOW_MAX) {
            pageList = Array.from({ length: totalPageNum }, (v, i) => i + 1);
            restLeftPageList = [];
            restRightPageList = [];
        } else {
            switch (true) {
                case current() < 4:
                    pageList = [1, 2, 3, 4, '•••', totalPageNum - 1, totalPageNum];
                    restRightPageList = Array.from({ length: Math.min(totalPageNum - 6, REST_PAGE_MAX_SIZE) }, (v, i) => i + 5);
                    restLeftPageList = [];
                    break;
                case current() === 4:
                    pageList = [1, 2, 3, 4, 5, '•••', totalPageNum];
                    restRightPageList = Array.from({ length: Math.min(totalPageNum - 6, REST_PAGE_MAX_SIZE) }, (v, i) => i + 6);
                    restLeftPageList = [];
                    break;
                case 4 < current() && current() < totalPageNum - 3: {
                    const middleNumbers = Array.from(
                        { length: 3 },
                        (v, i) => current() + (i - 1)
                    );
                    pageList = ([1] as any[]).concat('•••', middleNumbers, '•••', totalPageNum);
                    // length: total-(currentPage+1)-1
                    restRightPageList = Array.from(
                        { length: Math.min(totalPageNum - current() - 2, REST_PAGE_MAX_SIZE) },
                        (v, i) => current() + i + 2
                    );
                    restLeftPageList = Array.from({ length: Math.min(current() - 3, REST_PAGE_MAX_SIZE) }, (v, i) => i + 2);
                    break;
                }
                case current() - 3 <= current() && current() <= totalPageNum: {
                    const right = Array.from({ length: 5 }, (v, i) => totalPageNum - (4 - i));
                    pageList = [1, '•••' as const].concat(right);
                    restRightPageList = [];
                    restLeftPageList = Array.from({ length: Math.min(right[0] - 2, REST_PAGE_MAX_SIZE) }, (v, i) => i + 2);
                    break;
                }
                default:
                    break;
            }
        }
        return { pageList, restLeftPageList, restRightPageList };
    }

    function rednderItems () {
        if (!showNums) {
            return null;
        }
        const pagerList: any[] = [];
        const pageNumbers = getPageNumbers();

        const cur = current();
        pageNumbers.pageList.forEach(number => {
            const active = cur === number;
            pagerList.push(<PageItem active={active} onClick={_handleChange.bind(null, number)} currentIndex={number} />);
        })
        return pagerList;
    }

    return <div classList={classList()} style={props.style}>
        <Switch>
            <Match when={props.mini}>
                <ul class="cm-pagination-num-list">
                    <PagePrev current={current()} onClick={prev} />
                        <Input style={{ width: props.size === 'small' ? '35px' : '50px' }} class="mr-5"
                            value={[pageNum, setPageNum]} size={props.size} onChange={gotoPage} />
                        <span class="cm-pagination-mini-pages">/ {_calcPage()}</span>
                    <PageNext current={current()} onClick={next} disabled={current() === _calcPage()} />
                </ul>
            </Match>
            <Match when={!props.mini}>
                <Show when={showTotal}>
                    <span class="cm-pagination-text mr-5">共{total()}条</span>
                </Show>
                <ul class="cm-pagination-num-list">
                    <PagePrev current={current()} onClick={prev} />
                    {rednderItems()}
                    <PageNext current={current()} onClick={next} disabled={current() === _calcPage()} />
                </ul>
                <Show when={showPage}>
                    <span class="cm-pagination-sizer">
                        <Select value={pageSize()} size={props.size} onChange={onChangePageSize}
                            data={ps}>
                            <For each={pages}>
                                {(item: any) => {
                                    return <Option label={item.label} value={item.value} />
                                }}
                            </For>
                        </Select>
                    </span>
                </Show>
                <Show when={showJumper}>
                    <span class="cm-pagination-jumper">
                        <span class="cm-pagination-text">跳至</span>
                        <Input style={{ width: props.size === 'small' ? '35px' : '50px' }} class="mr-5"
                            value={[pageNum, setPageNum]} size={props.size} onChange={gotoPage} />
                        <span class="cm-pagination-text">页</span>
                    </span>
                </Show>
            </Match>
        </Switch>
    </div>
}

export default Pagination;
