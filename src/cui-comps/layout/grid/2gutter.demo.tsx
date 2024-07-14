import { Col, Row, Space } from "cui-solid"

function ColText (props: any) {
    return <div class="col-content" style={{...props.style, 'justify-content': 'center'}}>{props.children}</div>;
}


export default () => {
    return <Space dir="v">
        <Row gutter={16} class="example-demo">
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
        </Row>
        <div>row2</div>
        <Row gutter={[16, 16]} class="example-demo">
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
            <Col grid={1/4}><ColText>1/4</ColText></Col>
        </Row>
    </Space>
}