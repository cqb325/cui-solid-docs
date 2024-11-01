import { TabPane, Tabs } from "cui-solid"

export default () => {
    return <Tabs activeName="tab1" keepHeight>
        <TabPane title="标签一" name="tab1">
            <p>标签一的内容</p>
            <p>标签一的内容</p>
            <p>标签一的内容</p>
        </TabPane>
        <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
        <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
    </Tabs>
}
