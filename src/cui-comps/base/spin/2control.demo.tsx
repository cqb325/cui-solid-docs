import { createSignal, Show } from "solid-js";
import { Button, Card, Space, Spin } from "cui-solid"

export default () => {
    const [loading, setLoading] = createSignal(true);

    return <Space dir="v">
        <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <Show when={loading()}>
                <Spin title="加载中" />
            </Show>
        </Card>
        <div>
            <Button type="primary" onClick={() => {
                setLoading(!loading());
            }}>Toggle</Button>
        </div>
    </Space>
}