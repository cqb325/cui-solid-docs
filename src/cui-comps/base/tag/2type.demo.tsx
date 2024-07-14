import { Avatar, Space, Tag } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Tag>标签一</Tag>
        <Tag value={10}>Value</Tag>
        <Tag theme="primary" circle>Circle</Tag>
        <Tag theme="primary" border avatar={<Avatar>U</Avatar>}>Avatar</Tag>
    </Space>
}