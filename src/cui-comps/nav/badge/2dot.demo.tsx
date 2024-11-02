import { Badge, Space } from "cui-solid"
import { FeatherBell } from "cui-solid-icons/feather"

export default () => {
    return <Space dir="h" size={24}>
        <Badge dot>
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge dot>
            <FeatherBell size={26} />
        </Badge>
        <Badge dot>
            <a href="#">可以是一个链接</a>
        </Badge>
    </Space>
}
