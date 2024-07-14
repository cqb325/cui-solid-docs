import { Pagination } from "cui-solid"
import { createStore } from "solid-js/store";

export default () => {
    const [page, setPage] = createStore({
        current: 1,
        pageSize: 10
    })

    return <Pagination current={page.current} pages={[
        {value: 10, label: '10条/页'},
        {value: 50, label: '50条/页'},
        {value: 100, label: '100条/页'}
    ]} pageSize={page.pageSize} total={1000} onChange={(page) => {
        setPage('current', page);
    }} onChangePageSize={(size: number) => {
        setPage('pageSize', size);
    }}/>
}