import { Pagination } from "cui-solid"
import { createStore } from "solid-js/store";

export default () => {
    const [page, setPage] = createStore({
        current: 1,
        pageSize: 10
    })

    return <Pagination current={page.current} shape="circle" pageSize={page.pageSize} total={1000} onChange={(page) => {
        setPage('current', page);
    }} onChangePageSize={(size: number) => {
        setPage('pageSize', size);
    }}/>
}