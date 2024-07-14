import { Badge, Space } from "cui-solid"

export default () => {
    return <Space dir="h" size={50}>
        <Badge text="new">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge text="hot">
            <a href="#" class="demo-badge" />
        </Badge>
    </Space>
}