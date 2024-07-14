import { Anchor, Card, Col, HView, Row, View } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [currentAnchor, setCurrentAnchor] = createSignal<string>('');

    return <HView>
        <View class="anchor-scroll-container2" style={{height: '200px', overflow: 'auto', border: '1px solid #ccc'}}>
            <Row gutter={24}>
                <Col xs={1} lg={1} xl={0.5} style={{"position": "static"}}>
                    <div id="basic_usage2" classList={{'demo-anchor-active': currentAnchor() === 'basic_usage2'}}>
                        <Card title={<a>基础用法</a>} bordered>
                            <div style={{height: '300px'}} />
                        </Card>
                    </div>

                    <div id="API2" classList={{'demo-anchor-active': currentAnchor() === 'API2'}}>
                        <Card title={<a>API</a>} bordered>
                            <div style={{height: '400px'}} />
                        </Card>
                    </div>

                    <div id="Anchor_events2" classList={{'demo-anchor-active': currentAnchor() === 'Anchor_events2'}}>
                        <Card title={<a>Anchor_events</a>} bordered>
                            <div style={{height: '300px'}} />
                        </Card>
                    </div>
                </Col>
                <Col xs={1} lg={1} xl={0.5} style={{"position": "static"}}>
                    <div id="static_position2" classList={{'demo-anchor-active': currentAnchor() === 'static_position2'}}>
                        <Card title={<a>静态位置</a>} bordered>
                            <div style={{height: '600px'}} />
                        </Card>
                    </div>
                    <div id="Anchor_props2" classList={{'demo-anchor-active': currentAnchor() === 'Anchor_props2'}}>
                        <Card title={<a>Anchor props</a>} bordered>
                            <div style={{height: '600px'}} />
                        </Card>
                    </div>
                    <div id="AnchorLink_props2" classList={{'demo-anchor-active': currentAnchor() === 'AnchorLink_props2'}}>
                        <Card title={<a>AnchorLink_props</a>} bordered>
                            <div style={{height: '600px'}} />
                        </Card>
                    </div>
                </Col>
            </Row>
        </View>
        <div style={{width: '200px', 'padding-left': '32px'}}>
            <Anchor mode="history" container={'.anchor-scroll-container2'} onChange={(key) => {
                setCurrentAnchor(key)
            }}>
                <Anchor.Link href="#basic_usage2" title="Basic Usage" />
                <Anchor.Link href="#static_position2" title="Static Position" />
                <Anchor.Link href="#API2" title="API" />
                <Anchor.Link href="#Anchor_props2" title="Anchor props" />
                <Anchor.Link href="#Anchor_events2" title="Anchor events" />
                <Anchor.Link href="#AnchorLink_props2" title="AnchorLink props" />
            </Anchor>
        </div>
    </HView>
}