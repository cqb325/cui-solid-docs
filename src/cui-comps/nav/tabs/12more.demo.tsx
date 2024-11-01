import { Button, Space, TabPane, Tabs } from "cui-solid"
import { For } from "solid-js"

export default () => {
    const data = new Array(15).fill(1).map((_, index) => ({
        title: `标签${index}`,
        name: `tab${index}`,
        context: '标签内容'
    }))
    return <Space dir="v" size={24}>
        <Tabs activeName="tab0" align="top" more>
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>

        <div>moreDropdownProps</div>

        <Tabs activeName="tab0" align="top" more moreDropdownProps={{
            arrow: true,
            trigger: 'click',
        }}>
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>

        <div>renderMore自定义更多元素</div>

        <Tabs activeName="tab0" align="top" more renderMore={() => {
            return <Button>显示更多</Button>
        }}>
            <For each={data}>
                {item => <TabPane title={item.title} name={item.name}>{item.context}</TabPane>}
            </For>
        </Tabs>
    </Space>
}
