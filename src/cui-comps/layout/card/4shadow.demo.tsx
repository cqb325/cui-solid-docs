import { Card, Space } from "cui-solid"

export default () => {
    return <Space>
        <Card title="Title" style={{'max-width': '300px'}} bordered>
            <p>鼠标hover无阴影</p>
            <p>鼠标hover无阴影</p>
            <p>鼠标hover无阴影</p>
        </Card>
        <Card title="Title" style={{'max-width': '300px'}} bordered rised>
            <p>鼠标hover显示阴影</p>
            <p>鼠标hover显示阴影</p>
            <p>鼠标hover显示阴影</p>
        </Card>
    </Space>
}
