import { Col, Image, Row } from "cui-solid";

import img1 from './1.jpg';

export default () => {
    return <Row gutter={20} style={{'text-align': 'center'}}>
        <Col grid={1/5}>
            <Image width={100} height={100} fit="contain" src={img1}/>
            <div>contain</div>
        </Col>
        <Col grid={1/5}>
            <Image width={100} height={100} fit="cover" src={img1}/>
            <div>cover</div>
        </Col>
        <Col grid={1/5}>
            <Image width={100} height={100} fit="fill" src={img1}/>
            <div>fill</div>
        </Col>
        <Col grid={1/5}>
            <Image width={100} height={100} fit="none" src={img1}/>
            <div>none</div>
        </Col>
        <Col grid={1/5}>
            <Image width={100} height={100} fit="scale-down" src={img1}/>
            <div>scale-down</div>
        </Col>
    </Row>
}