import { Col, Row, Space } from "cui-solid"

function ColText (props: any) {
    return <div class="col-content" style={{...props.style, 'justify-content': 'center'}}>{props.children}</div>;
}

export default () => {
    return <Space dir="v" size={5} style={{'margin-top': '20px'}}>
        <Row justify="center" align="top" class="example-demo">
            <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
            <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
        </Row>
        <Row justify="center" align="bottom" class="example-demo">
            <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
            <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
        </Row>
        <Row justify="center" align="middle" class="example-demo">
            <Col grid={1/6}><ColText style={{height: '80px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
            <Col grid={1/6}><ColText style={{height: '100px'}}>1/6</ColText></Col>
            <Col grid={1/6}><ColText>1/6</ColText></Col>
        </Row>
    </Space>
}