import { Avatar, Space } from "cui-solid"
import { FeatherSettings } from "cui-solid-icons/feather";
import img from './avatar.png'

export default () => {
    return <Space dir="h" align="center">
        <Avatar icon={<FeatherSettings/>} />
        <Avatar>A</Avatar>
        <Avatar>Name</Avatar>
        <Avatar src={img} />
        <Avatar style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>U</Avatar>
        <Avatar style={{'background-color': 'rgb(135, 208, 104)'}} icon={<FeatherSettings/>} />
    </Space>
}
