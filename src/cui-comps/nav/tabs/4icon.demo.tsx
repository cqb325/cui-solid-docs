import { TabPane, Tabs } from "cui-solid"
import { FeatherCodesandbox, FeatherCommand, FeatherSlack } from "cui-solid-icons/feather"

export default () => {
    return <Tabs activeName="tab1">
        <TabPane title="标签一" name="tab1" icon={<FeatherCodesandbox />}>标签一的内容</TabPane>
        <TabPane title="标签二" name="tab2" icon={<FeatherCommand />}>标签二的内容</TabPane>
        <TabPane title="标签三" name="tab3" icon={<FeatherSlack/>}>标签三的内容</TabPane>
    </Tabs>
}
