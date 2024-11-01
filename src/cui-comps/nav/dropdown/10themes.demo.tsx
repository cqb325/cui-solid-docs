import { Button, Dropdown, DropdownItem, DropdownMenu, Space } from "cui-solid"
import { For } from "solid-js";

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
    return <Space dir="v">
        <Space wrap>
            <For each={['primary','success','info', 'warning','error', 'blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                {(color) => {
                    return <Dropdown align="bottom" arrow menu={menu} theme={color}>
                        <Button>{color}</Button>
                    </Dropdown>
                }}
            </For>
        </Space>

        <Space>
            <For each={['#f50', '#2db7f5', '#87d068', '#108ee9']}>
                {(color) => {
                    return <Dropdown align="bottom" arrow menu={menu} theme={color} color="#fff">
                        <Button>{color}</Button>
                    </Dropdown>
                }}
            </For>
        </Space>
    </Space>
}
