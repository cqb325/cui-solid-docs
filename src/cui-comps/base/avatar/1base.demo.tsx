import { Avatar, Space } from "cui-solid"
import { FeatherSettings } from "cui-solid-icons/feather";

export default () => {
    return <Space dir="h" align="center">
        <Avatar size="small" icon={<FeatherSettings />} />
        <Avatar icon={<FeatherSettings />} />
        <Avatar size="large" icon={<FeatherSettings />} />
        <Avatar size={48} icon={<FeatherSettings size={24}/>} />
    </Space>
}
