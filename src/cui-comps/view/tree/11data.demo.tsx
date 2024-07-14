import { Button, Tree } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [data, setData]: any = createSignal([{id: '1', title: '动态数据'}]);

    return <>
        <Tree data={data()} multi directory/>
        <Button type="primary" onClick={() => {
            const da = [];
            for (let i = 0; i < 1 + Math.random() * 5; i++) {
                const c = [];
                for (let j = 0; j < 1 + Math.random() * 5; j++) {
                    c.push({title: `node_${i}_${j}`, id: `${i}_${j}`});
                }
                da.push({title: `node_${i}`, id: `${i}`, children: c});
            }
            setData(da)
        }}>改变数据</Button>
    </>
}