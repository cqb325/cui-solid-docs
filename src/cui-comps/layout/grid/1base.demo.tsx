import { Col, Row, Space } from "cui-solid"

function ColText (props: any) {
    return <div class="col-content" style={{...props.style, 'justify-content': 'center'}}>{props.children}</div>;
}


export default () => {
    return <Space dir="v" size={5}>
        <Row class="demo-row">
            <Col class="demo-col"><ColText>100%</ColText></Col>
        </Row>
        <Row class="demo-row light">
            <Col class="demo-col" grid={0.5}><ColText>50%</ColText></Col>
            <Col class="demo-col light" grid={0.5}><ColText>50%</ColText></Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col" grid={1/3}><ColText>1/3</ColText></Col>
            <Col class="demo-col light" grid={1/3}><ColText>1/3</ColText></Col>
            <Col class="demo-col" grid={1/3}><ColText>1/3</ColText></Col>
        </Row>
        <Row class="demo-row light">
            <Col class="demo-col" grid={1/4}><ColText>1/4</ColText></Col>
            <Col class="demo-col light" grid={1/4}><ColText>1/4</ColText></Col>
            <Col class="demo-col" grid={1/4}><ColText>1/4</ColText></Col>
            <Col class="demo-col light" grid={1/4}><ColText>1/4</ColText></Col>
        </Row>
        <Row class="demo-row">
            <Col class="demo-col" grid={2/3}><ColText>2/3</ColText></Col>
            <Col class="demo-col light" grid={1/3}><ColText>1/3</ColText></Col>
        </Row>
    </Space>
}