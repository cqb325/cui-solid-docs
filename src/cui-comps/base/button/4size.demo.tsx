import { Button, Space, Icon } from 'cui-solid';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" size="large">LARGE</Button>
            <Button type="primary">DEFAULT</Button>
            <Button type="primary" size="small">SMALL</Button>
        </Space>
        <Space dir="h">
            <Button type="primary" size="large" icon={<Icon name="search1"/>}>SEARCH</Button>
            <Button type="primary" size="large" icon={<Icon name="search1"/>} />
            <Button type="primary" size="large" circle icon={<Icon name="search1"/>} />
        </Space>
        <Space dir="h">
            <Button type="primary" size="small" icon={<Icon name="search1"/>}>SEARCH</Button>
            <Button type="primary" size="small" icon={<Icon name="search1"/>} />
            <Button type="primary" size="small" circle icon={<Icon name="search1"/>} />
            <Button type="text" size="small">Text</Button>
        </Space>
    </Space>
}