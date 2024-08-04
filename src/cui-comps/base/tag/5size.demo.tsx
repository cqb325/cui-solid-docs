import { Space, Tag, Avatar } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Tag size="large">标签一</Tag>
        <Tag size="large" avatar={<Avatar>U</Avatar>}>标签一</Tag>
        <Tag size="large" value={10}>标签一</Tag>
        <Tag size="xlarge">标签一</Tag>
        <Tag size="xlarge" avatar={<Avatar>U</Avatar>}>标签一</Tag>
        <Tag size="xlarge" value={10}>标签一</Tag>
        <Tag theme="primary">标签二</Tag>
    </Space>
}
