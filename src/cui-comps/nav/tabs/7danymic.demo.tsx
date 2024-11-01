import { createSignal, For } from "solid-js";
import { Button, TabPane, Tabs } from "cui-solid"

export default () => {
    const [data, setData] = createSignal([
        {
            title: `标签一`,
            name: `tab1`,
            context: '标签一内容'
        }
    ]);
    let index = 1;

    const addTab = () => {
        const num = index++;
        setData([...data(), {
            title: `Title_${num}`,
            name: `tab_${num}`,
            context: '新增tab内容'
        }]);
    }

    return <>
        <Tabs activeName="tab1" type="card" onRemove={(name) => {
            const arr = data();
            const index = arr.findIndex((item: any) => item.name === name)
            arr.splice(index, 1);
            setData(arr);
        }}>
            <For each={data()}>
                {(item: any)=> {
                    return <TabPane title={item.title} name={item.name} closeable>{item.context}</TabPane>
                }}
            </For>
        </Tabs>
        <Button type="primary" onClick={addTab}>添加</Button>
    </>
}
