import { Col, Option, Row, Select } from "cui-solid"

export default () => {
    return <Row>
        <Col grid={0.33}>
            <Select size="large">
                <Option value={1} label="北京" />
                <Option value={2} label="上海" />
                <Option value={3} label="杭州" />
                <Option value={4} label="武汉" />
                <Option value={5} label="天津" />
            </Select>
        </Col>
        <Col grid={0.33}>
            <Select>
                <Option value={1} label="北京" />
                <Option value={2} label="上海" />
                <Option value={3} label="杭州" />
                <Option value={4} label="武汉" />
                <Option value={5} label="天津" />
            </Select>
        </Col>
        <Col grid={0.33}>
            <Select size="small">
                <Option value={1} label="北京" />
                <Option value={2} label="上海" />
                <Option value={3} label="杭州" />
                <Option value={4} label="武汉" />
                <Option value={5} label="天津" />
            </Select>
        </Col>
    </Row>
}