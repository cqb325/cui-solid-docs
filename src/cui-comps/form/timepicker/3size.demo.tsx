import { Col, Row, Timepicker } from "cui-solid"

export default () => {
    return <Row gutter={20}>
        <Col grid={0.33}>
            <Timepicker value="22:35:11" size="large"/>
        </Col>
        <Col grid={0.33}>
            <Timepicker value="22:35:11" />
        </Col>
        <Col grid={0.33}>
            <Timepicker value="22:35:11" size="small"/>
        </Col>
    </Row>
}