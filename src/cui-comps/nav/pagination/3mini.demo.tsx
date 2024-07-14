import { Pagination } from "cui-solid"
import { createStore } from "solid-js/store";

export default () => {
    const [page, setPage] = createStore({
        current: 1,
        pageSize: 10
    })

    return <Pagination mini size="small" current={page.current} pageSize={page.pageSize} total={1000} onChange={(page: number) => {
        setPage('current', page);
    }} onChangePageSize={(size: number) => {
        setPage('pageSize', size);
    }}/>
}