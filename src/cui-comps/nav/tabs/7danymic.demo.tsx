import { createSignal, For } from "solid-js";
import { Button, Tab, Tabs } from "cui-solid"

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
        <Tabs activeName="tab1" card>
            <For each={data()}>
                {(item: any)=> {
                    return <Tab title={item.title} name={item.name} closeable>{item.context}</Tab>
                }}
            </For>
        </Tabs>
        <Button type="primary" onClick={addTab}>添加</Button>
    </>
}