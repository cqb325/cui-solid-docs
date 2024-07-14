import { Paragraph, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Paragraph copyable>
            CMUI Web 组件库。
        </Paragraph>
        <Paragraph copyable copyText="自定义内容">
            自定义拷贝内容。
        </Paragraph>
    </Space>
}