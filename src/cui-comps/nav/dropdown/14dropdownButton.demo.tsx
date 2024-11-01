import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, Space } from "cui-solid"
import { F7ArrowBranch, F7ArrowshapeTurnUpRight, F7CubeBox, F7Ellipsis, F7Gear, F7RocketFill, F7Star, F7TrayArrowDown, F7Wrench } from "cui-solid-icons/f7";

export default () => {
    const menu = () => <DropdownMenu>
        <DropdownMenu>
            <DropdownItem name="0" icon={<F7CubeBox/>}>Menu Item 1</DropdownItem>
            <DropdownItem name="1" icon={<F7Gear/>} theme="primary">驴打滚</DropdownItem>
            <DropdownItem name="2" icon={<F7ArrowshapeTurnUpRight />} theme="secondary">炸酱面</DropdownItem>
            <DropdownItem name="3" icon={<F7ArrowBranch />} theme="tertiary">豆汁儿</DropdownItem>
            <DropdownItem name="3" icon={<F7ArrowBranch />} theme="primary" disabled>豆汁儿</DropdownItem>
            <DropdownItem name="4" icon={<F7RocketFill />} theme="error">北京烤鸭</DropdownItem>
            <DropdownItem name="5" icon={<F7Star />} theme="warning">挂炉烤鸭</DropdownItem>
            <DropdownItem name="6" icon={<F7TrayArrowDown />} theme="info">焖炉烤鸭</DropdownItem>
            <DropdownItem name="6" icon={<F7Wrench />} theme="success">焖炉烤鸭</DropdownItem>
        </DropdownMenu>
    </DropdownMenu>
    return <Space>
        <ButtonGroup>
            <Button>Dropdown</Button>
            <Dropdown align="bottomRight" transfer arrow trigger="click" menu={menu()}>
                <Button icon={<F7Ellipsis/>} />
            </Dropdown>
        </ButtonGroup>
    </Space>
}
