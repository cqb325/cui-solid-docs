import { AutoComplete } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [data, setData] = createSignal([]);

    return <AutoComplete data={data()} placeholder="查询" onSearch={(v: any) => {
        const arr: any = [];
        arr.push(v);
        arr.push(v+v);
        arr.push(v+v+v);
        setData(arr);
    }}/>
}