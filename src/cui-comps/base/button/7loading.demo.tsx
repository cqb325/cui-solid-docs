import { Button, Space } from 'cui-solid';
import { createSignal } from 'solid-js';

export default function Demo () {
    const [loading, setLoading] = createSignal(false);
    return <Space dir="v">
        <Space dir="h" align="center">
            <Button type="primary" loading size="small">Sphinx</Button>
            <Button type="success" loading size="small" />
            <Button type="success" loading size="small" shape="circle" />
        </Space>
        <Space dir="h">
            <Button type="primary" loading>Loading</Button>
            <Button type="primary" loading={loading()} onClick={() => {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                }, 2500)
            }}>Click Load</Button>
        </Space>
    </Space>
}
