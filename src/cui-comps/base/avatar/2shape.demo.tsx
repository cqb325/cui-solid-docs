import { Avatar, Space } from "cui-solid"
import { FeatherSettings } from "cui-solid-icons/feather";

export default () => {
    return <Space dir="h" align="center">
        <Avatar icon={<FeatherSettings />} />
        <Avatar shape="square" icon={<FeatherSettings/>} />
    </Space>
}
