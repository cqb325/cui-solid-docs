import { Button, Dropdown, Space } from "cui-solid"

export default () => {
    return <Space>
        <Dropdown align="bottom" arrow data={[
                {name: '1', title: '驴打滚'},
                {name: '2', title: '炸酱面'},
                {name: '3', title: '豆汁儿', disabled: true},
                {name: '4', divided: true, title: '北京烤鸭', children: [
                    {name: '41', title: '挂炉烤鸭'},
                    {name: '42', title: '焖炉烤鸭'},
                ]},
            ]}>
            <Button>使用data数据</Button>
        </Dropdown>
    </Space>
}
