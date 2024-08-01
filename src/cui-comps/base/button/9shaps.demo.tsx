import { Button, Space, Icon } from 'cui-solid';

export default function Demo () {
    return <Space dir="h" align="center">
        <Button type="primary" icon={<Icon name="search1"/>}>普通按钮</Button>
        <Button type="primary" round icon={<Icon name="search1"/>}>圆角按钮</Button>
        <Button type="primary" circle icon={<Icon name="search1"/>} />
        <Button type="success" size="large" round>Success</Button>
    </Space>
}
