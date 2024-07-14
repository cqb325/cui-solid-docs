import { Avatar, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="h" align="center">
        <Avatar size="small" icon={<Icon name="settings"/>} />
        <Avatar icon={<Icon name="settings"/>} />
        <Avatar size="large" icon={<Icon name="settings"/>} />
        <Avatar size={48} icon={<Icon name="settings" size={24}/>} />
    </Space>
}