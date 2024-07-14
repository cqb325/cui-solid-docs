import { Badge, Space } from "cui-solid"

export default () => {
    return <Space dir="h" size={50}>
        <Badge count={10} />
        <Badge count={10} class="demo-badge-alone"/>
    </Space>
}