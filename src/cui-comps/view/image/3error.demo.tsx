import { Button, Col, Icon, Image, Row, Space, Spin } from "cui-solid";

import img1 from './1.jpg';
import { createSignal } from "solid-js";

export default () => {
    const [src, setSrc] = createSignal('');
    return <Space dir="h">
        <Row style={{'text-align': 'center'}} gutter={20}>
            <Col grid={0.5}>
                <Image width={200} height={100} fit="cover" src={src()}/>
                <div>默认</div>
            </Col>
            <Col grid={0.5}>
                <Image width={200} height={100} fit="cover" src={src()} failInfo={<Icon name="image"/>}/>
                <div>自定义</div>
            </Col>
        </Row>
        <Button type="primary" onClick={() => {
            setSrc(img1)
        }}>加载</Button>
    </Space>
}