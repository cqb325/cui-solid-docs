import { Button, Space, Tag } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(true);

    return <Space dir="h">
        <Tag theme="primary" closable visible={[visible, setVisible]}>标签一</Tag>
        <Button size="small" onClick={() => {
            setVisible(!visible());
        }}>关闭/显示</Button>
    </Space>
}