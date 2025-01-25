import { Card, Tabs, TabPane} from "cui-solid"

export default () => {
    return <Card bordered>
        <Tabs activeName="tab1">
            <TabPane name="tab1" title="标签一">内容tab1内容tab1</TabPane>
            <TabPane name="tab2" title="标签二">内容tab2内容tab2</TabPane>
        </Tabs>
    </Card>
}
