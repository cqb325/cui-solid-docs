import { Button, Space } from 'cui-solid';
import { F7Search, F7Plus } from 'cui-solid-icons/f7';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" icon={<F7Search />} />
            <Button type="default" icon={<F7Search />} />
            <Button theme="dashed" icon={<F7Plus/>} />
            <Button type="primary" shape="circle" icon={<F7Search />} />
        </Space>
        <Space dir="h" align="center">
            <Button type="primary" icon={<F7Search/>}>Search</Button>
            <Button type="primary" icon={<F7Search/>} iconAlign="right">Search</Button>
        </Space>
    </Space>
}
