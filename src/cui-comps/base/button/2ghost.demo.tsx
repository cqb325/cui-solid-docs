import { Button, Space } from 'cui-solid';

export default function Demo () {
    return <Space dir="h" style={{background: 'var(--cui-color-fill-0)', padding: '10px'}} wrap>
        <Button type="primary" ghost>PRIMARY</Button>
        <Button type="success" ghost>SUCCESS</Button>
        <Button type="error" ghost>ERROR</Button>
        <Button type="warning" ghost>WARNING</Button>
        <Button type="default" ghost>DEFAULT</Button>
        <Button type="dashed" ghost>DASHED</Button>
    </Space>
}