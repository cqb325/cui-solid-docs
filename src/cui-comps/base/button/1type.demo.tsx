import { Button, Space } from 'cui-solid';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h">
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="tertiary">Tertiary</Button>
            <Button type="success">Success</Button>
        </Space>
        <Space dir="h">
            <Button type="error">Error</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <Button>Default</Button>
        </Space>
    </Space>
}
