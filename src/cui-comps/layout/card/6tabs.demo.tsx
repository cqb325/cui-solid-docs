import { Card, Tabs, Tab} from "cui-solid"

export default () => {
    return <Card title='Title' bordered>
        <Tabs>
            <Tab name="tab1" title="标签一">内容tab1内容tab1</Tab>
            <Tab name="tab2" title="标签二">内容tab2内容tab2</Tab>
        </Tabs>
    </Card>
}
