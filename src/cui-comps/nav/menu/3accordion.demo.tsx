import { Menu, MenuGroup, MenuItem, SubMenu } from "cui-solid"
import { F7Gear, F7Person2Fill, F7PersonFill } from "cui-solid-icons/f7"

export default () => {
    return <div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
        <Menu dir="v" accordion>
            <SubMenu name="1" icon={<F7Person2Fill />} title="角色管理">
                <MenuItem name="11">添加</MenuItem>
                <MenuItem name="12">修改</MenuItem>
                <MenuItem name="13">删除</MenuItem>
            </SubMenu>
            <MenuItem name="2" icon={<F7PersonFill />}>用户管理</MenuItem>
            <SubMenu name="3" icon={<F7Gear />} title="系统管理">
                <MenuItem name="31">菜单管理</MenuItem>
                <SubMenu name="32" title="字典管理">
                    <MenuGroup name="321" title="系统字典">
                        <MenuItem name="3211">添加</MenuItem>
                        <MenuItem name="3212">修改</MenuItem>
                        <MenuItem name="3213">删除</MenuItem>
                    </MenuGroup>
                    <MenuGroup name="322" title="客户字典">
                        <MenuItem name="3221">添加</MenuItem>
                        <MenuItem name="3222">修改</MenuItem>
                        <MenuItem name="3223">删除</MenuItem>
                    </MenuGroup>
                </SubMenu>
                <MenuItem name="33">权限管理</MenuItem>
            </SubMenu>
        </Menu>
    </div>
}
