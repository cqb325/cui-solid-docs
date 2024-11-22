import { Space, TabPane, Tabs } from "cui-solid"

export default () => {
    return <Space dir="v" size={24}>
        <Tabs activeName="tab0" maxTabSize={90} type="button" buttonTheme="outline" tooltip>
            <TabPane title="这是一个超长标题" name="tab0"></TabPane>
            <TabPane title="这是一个超长标题" name="tab1"></TabPane>
            <TabPane title="这是一个超长标题" name="tab2"></TabPane>
        </Tabs>
    </Space>
}
