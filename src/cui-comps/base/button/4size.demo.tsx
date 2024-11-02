import { Button, Space } from 'cui-solid';
import { F7Search } from 'cui-solid-icons/f7';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" size="large">LARGE</Button>
            <Button type="primary">DEFAULT</Button>
            <Button type="primary" size="small">SMALL</Button>
        </Space>
        <Space dir="h">
            <Button type="primary" size="large" icon={<F7Search />}>SEARCH</Button>
            <Button type="primary" size="large" icon={<F7Search />} />
            <Button type="primary" size="large" shape="circle" icon={<F7Search />} />
        </Space>
        <Space dir="h">
            <Button type="primary" size="small" icon={<F7Search />}>SEARCH</Button>
            <Button type="primary" size="small" icon={<F7Search />} />
            <Button type="primary" size="small" shape="circle" icon={<F7Search />} />
            <Button theme="borderless" size="small">Text</Button>
        </Space>
    </Space>
}
