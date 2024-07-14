import { Avatar, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="h" align="center">
        <Avatar icon={<Icon name="settings"/>} />
        <Avatar shape="square" icon={<Icon name="settings"/>} />
    </Space>
}