import { Dropdown, DropdownItem, DropdownMenu, Icon, Space, Text } from "cui-solid"

export default () => {
    return <Space dir="h" size={50}>
        <Dropdown trigger="click" align="rightTop" menu={<DropdownMenu>
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
            <Text>右侧显示</Text>
        </Dropdown>

        <Dropdown trigger="click" align="bottomRight" menu={<DropdownMenu>
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
            <Text>右下侧显示</Text>
        </Dropdown>
    </Space>
}
