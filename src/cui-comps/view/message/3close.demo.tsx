import { Button, message, Space } from "cui-solid";

export default () => {
    return <Space dir="h">
        <Button type="primary" onClick={() => {
            message.info({
                content: '可关闭message',
                background: true,
                closeable: true,
                duration: 0
            })
        }}>可关闭</Button>
    </Space>
}