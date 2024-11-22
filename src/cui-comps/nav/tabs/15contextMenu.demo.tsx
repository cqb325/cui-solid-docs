import { DropdownItem, DropdownMenu, Space, TabPane, Tabs } from "cui-solid"

export default () => {
    return <Space dir="v" size={24}>
        <Tabs activeName="tab0" type="button" buttonTheme="outline"
            contextMenu={<DropdownMenu>
            <DropdownItem name="menu1">选项1</DropdownItem>
            <DropdownItem name="menu2">选项2</DropdownItem>
        </DropdownMenu>}
        onContextMenu={(item) => {
            console.log('onContextMenu', item);
        }}
        onSelectContextMenu={(name, item) => {
            console.log(name, item, 'onSelectContextMenu');
        }}>
            <TabPane title="这是一个超长标题" name="tab0"></TabPane>
            <TabPane title="这是一个超长标题" name="tab1"></TabPane>
            <TabPane title="这是一个超长标题" name="tab2"></TabPane>
        </Tabs>
    </Space>
}
