import { Avatar, Icon, Space } from "cui-solid"

import img from './avatar.png'

export default () => {
    return <Space dir="h" align="center">
        <Avatar icon={<Icon name="settings"/>} />
        <Avatar>A</Avatar>
        <Avatar>Name</Avatar>
        <Avatar src={img} />
        <Avatar style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>U</Avatar>
        <Avatar style={{'background-color': 'rgb(135, 208, 104)'}} icon={<Icon name="settings"/>} />
    </Space>
}