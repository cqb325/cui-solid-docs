import { Button, TabPane, Tabs } from "cui-solid"

export default () => {
    return <Tabs activeName="tab1" prepend={<Button size="small">prepend extra</Button>} append={<Button size="small">添加</Button>}>
        <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
        <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
        <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
    </Tabs>
}
