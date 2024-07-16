import { Button, Space } from 'cui-solid';

export default function Demo () {
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" danger>Primary</Button>
            <Button type="default" danger>Default</Button>
            <Button type="text" danger>Text Button</Button>
            <Button type="link" danger>LINK</Button>
            <Button type="dashed" danger>Dashed BUTTON</Button>
        </Space>
    </Space>
}
