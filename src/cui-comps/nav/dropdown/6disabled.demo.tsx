import { Dropdown, DropdownItem, DropdownMenu, Text } from "cui-solid"

export default () => {
    return <Dropdown disabled trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided arrow>北京烤鸭
            <DropdownMenu>
                <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>禁用下拉菜单</Text>
    </Dropdown>
}
