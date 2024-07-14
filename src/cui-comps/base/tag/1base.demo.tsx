import { Space, Tag } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Tag>标签一</Tag>
        <Tag border>标签二</Tag>
        <Tag closable>标签三</Tag>
    </Space>
}