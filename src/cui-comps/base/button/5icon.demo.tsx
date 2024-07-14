import { Button, Space, Icon } from 'cui-solid';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" icon={<Icon name="search1"/>} />
            <Button type="default" icon={<Icon name="search1"/>} />
            <Button type="dashed" icon={<Icon name="plus"/>} />
            <Button type="primary" circle icon={<Icon name="search1"/>} />
        </Space>
        <Space dir="h" align="center">
            <Button type="primary" icon={<Icon name="search1"/>}>Search</Button>
            <Button type="primary" icon={<Icon name="search1"/>} iconAlign="right">Search</Button>
        </Space>
    </Space>
}