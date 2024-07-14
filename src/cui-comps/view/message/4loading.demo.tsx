import { Button, message, Space } from "cui-solid";
import { createUniqueId } from "solid-js";

export default () => {
    return <Space dir="h">
        <Button type="primary" onClick={() => {
            const key = createUniqueId();
            message.info({
                key,
                content: 'Loading...',
                background: true,
                loading: true,
                duration: 0
            })

            setTimeout(() => {
                message.close(key);
            }, 4000)
        }}>加载</Button>
    </Space>
}