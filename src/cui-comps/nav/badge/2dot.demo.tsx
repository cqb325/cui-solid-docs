import { Badge, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="h" size={24}>
        <Badge dot>
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge dot>
            <Icon name="bell1" size={26} />
        </Badge>
        <Badge dot>
            <a href="#">可以是一个链接</a>
        </Badge>
    </Space>
}