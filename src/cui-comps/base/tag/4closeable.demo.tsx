import { Avatar, Space, Tag } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Tag closable>标签一</Tag>
        <Tag value={10} closable>Value</Tag>
        <Tag theme="primary" circle closable>Circle</Tag>
        <Tag theme="primary" closable avatar={<Avatar>U</Avatar>}>Avatar</Tag>
    </Space>
}