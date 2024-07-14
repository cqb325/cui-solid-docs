import { Card, Space, Spin } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <Spin type="pulse" />
        </Card>

        <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <Spin type="gear" />
        </Card>

        <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <div>卡片内容卡片内容</div>
            <Spin type="oval" />
        </Card>
    </Space>
}