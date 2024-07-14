import { Badge, Space } from "cui-solid"

export default () => {
    return <Space dir="h" size={24}>
        <Badge count={5} type="primary">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={5} type="success">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={5} type="normal">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={5} type="info">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={5} type="error">
            <a href="#" class="demo-badge" />
        </Badge>
        <Badge count={5} type="warning">
            <a href="#" class="demo-badge" />
        </Badge>
    </Space>
}