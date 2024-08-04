import { Dropdown, DropdownItem, DropdownMenu, Icon, Text } from "cui-solid"

export default () => {
    return <Dropdown transfer trigger="click" align="bottomLeft" menu={<DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
            <DropdownMenu>
                <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>} onSelect={(name: string) => {
        console.log(name);
    }}>
        <Text>菜单元素在body下</Text>
    </Dropdown>
}
