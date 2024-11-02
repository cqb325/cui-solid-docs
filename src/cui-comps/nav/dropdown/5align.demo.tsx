import { Button, Dropdown, DropdownItem, DropdownMenu, Space } from "cui-solid"
import type {DropdownProps} from "cui-solid"
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
    return <Space dir="v" size={24}>
        <Space dir="h" size={24} wrap>
            <For each={['bottomLeft', 'bottom', 'bottomRight']}>
                {(align) => <Dropdown trigger="click" align={align as DropdownProps['align']} menu={menu()}>
                    <Button>{align}</Button>
                </Dropdown>
                }
            </For>
        </Space>

        <Space dir="h" size={24} wrap>
            <For each={['top', 'topLeft', 'topRight']}>
                {(align) => <Dropdown trigger="click" align={align as DropdownProps['align']} menu={menu()}>
                    <Button>{align}</Button>
                </Dropdown>
                }
            </For>
        </Space>

        <Space dir="h" size={24} wrap>
            <For each={['left', 'leftTop', 'leftBottom']}>
                {(align) => <Dropdown trigger="click" align={align as DropdownProps['align']} menu={menu()}>
                    <Button>{align}</Button>
                </Dropdown>
                }
            </For>
        </Space>

        <Space dir="h" size={24} wrap>
            <For each={['rightTop', 'right', 'rightBottom']}>
                {(align) => <Dropdown trigger="click" align={align as DropdownProps['align']} menu={menu()}>
                    <Button>{align}</Button>
                </Dropdown>
                }
            </For>
        </Space>
    </Space>
}
