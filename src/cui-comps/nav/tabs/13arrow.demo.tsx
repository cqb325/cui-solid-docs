import { Button, Space, TabPane, Tabs } from "cui-solid"
import { For } from "solid-js"

export default () => {
    const data = new Array(15).fill(1).map((_, index) => ({
        title: `标签${index}`,
        name: `tab${index}`,
        context: '标签内容'
    }))
    return <Space dir="v" size={24}>
        <Tabs activeName="tab0" align="top" more arrowPosition="both">
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>

        <Tabs activeName="tab0" align="top" more arrowPosition="start">
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>

        <Tabs activeName="tab0" align="top" more arrowPosition="end">
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>
    </Space>
}
