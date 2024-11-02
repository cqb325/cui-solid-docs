import { RadioGroup, Space, TabPane, Tabs } from "cui-solid"
import type { TabsProps } from "cui-solid"
import { createSignal } from "solid-js"

export default () => {
    const [type, setType] = createSignal<TabsProps['type']>("line");
    return <Space dir="v" align="baseline">
        <RadioGroup stick value={[type, setType]} data={[{value: 'line', label: 'line'}, {value: 'card', label: 'card'},
            {value: 'button', label: 'button'}
        ]}/>
        <Tabs activeName="tab1" type={type()}>
            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
        </Tabs>
    </Space>
}
