import { Button, Dropdown, DropdownItem, DropdownMenu, Space } from "cui-solid"

export default () => {
    const menu = () => <DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided arrow>北京烤鸭
            <DropdownMenu>
                <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>
    return <Space>
        <Dropdown align="bottom" arrow menu={menu()}>
            <Button>显示Arrow</Button>
        </Dropdown>
    </Space>
}
