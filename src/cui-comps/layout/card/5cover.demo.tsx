import { Card, Space, BothSide, Avatar, Text, Image, Link, Button} from "cui-solid"
import img from './card-cover.webp';
import avatar from './avatar.png';

export default () => {
    return <Card title={
        <BothSide>
            <Space align="center">
                <Avatar src={avatar}/>
                <Space dir="v" size={2}>
                    <Text strong>案例</Text>
                    <Text type="Secondary">描述</Text>
                </Space>
            </Space>
            <Link>More</Link>
        </BothSide>
    } cover={<Image src={img}/>} bordered style={{'max-width': '300px'}} footer={
        <Space justify="end">
            <Button type="text">文字提示</Button>
            <Button type="primary">开始使用</Button>
        </Space>}>
        卡片内容
    </Card>
}
