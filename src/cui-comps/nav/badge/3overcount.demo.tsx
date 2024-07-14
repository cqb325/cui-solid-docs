import { Badge, Space } from "cui-solid"

export default () => {
    return <Space dir="h" size={24}>
        <Badge count={100}>
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={1000} overflowCount={999}>
            <a href="#" class="demo-badge" />
        </Badge>
    </Space>
}