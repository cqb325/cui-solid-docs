import { Col, Row } from "cui-solid"

function ColText (props: any) {
    return <div class="col-content" style={{...props.style, 'justify-content': 'center'}}>{props.children}</div>;
}


export default () => {
    return <Row class="example-demo">
        <Col grid={3/4} push={1/4}><ColText>3/4 push-1/4</ColText></Col>
        <Col grid={1/4} pull={3/4}><ColText>1/4 pull-3/4</ColText></Col>
    </Row>
}