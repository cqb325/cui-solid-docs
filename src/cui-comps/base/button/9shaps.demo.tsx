import { Button, Space } from 'cui-solid';
import { F7Search } from 'cui-solid-icons/f7';

export default function Demo () {
    return <Space dir="h" align="center">
        <Button type="primary" icon={<F7Search />}>普通按钮</Button>
        <Button type="primary" shape="round" icon={<F7Search/>}>圆角按钮</Button>
        <Button type="primary" shape="circle" icon={<F7Search/>} />
        <Button type="success" size="large" shape="round">Success</Button>
    </Space>
}
