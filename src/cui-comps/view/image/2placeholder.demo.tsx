import { Button, Col, Image, Row, Space, Spin } from "cui-solid";

import img10 from './10.jpg';
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
                <Image width={200} height={100} fit="cover" src={src()} placeholder={<Spin />}/>
                <div>自定义</div>
            </Col>
        </Row>
        <Button type="primary" onClick={() => {
            setSrc(img10)
        }}>加载</Button>
    </Space>
}