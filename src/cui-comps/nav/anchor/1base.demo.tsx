import { Anchor, Card, HView, View } from "cui-solid"

export default () => {
    return <HView>
        <View class="anchor-scroll-container" style={{height: '200px', overflow: 'auto', border: '1px solid #ccc'}}>
            <div id="basic_usage">
                <Card title={<a>基础用法</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>

            <div id="static_position">
                <Card title={<a>静态位置</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>

            <div id="API">
                <Card title={<a>API</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>

            <div id="Anchor_props">
                <Card title={<a>Anchor props</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>

            <div id="Anchor_events">
                <Card title={<a>Anchor_events</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>

            <div id="AnchorLink_props">
                <Card title={<a>AnchorLink_props</a>}>
                    <div style={{height: '600px'}} />
                </Card>
            </div>
        </View>
        <div style={{width: '200px', 'padding-left': '32px'}}>
            <Anchor mode="history" container={'.anchor-scroll-container'}>
                <Anchor.Link href="#basic_usage" title="Basic Usage" />
                <Anchor.Link href="#static_position" title="Static Position" />
                <Anchor.Link href="#API" title="API" />
                <Anchor.Link href="#Anchor_props" title="Anchor props" />
                <Anchor.Link href="#Anchor_events" title="Anchor events" />
                <Anchor.Link href="#AnchorLink_props" title="AnchorLink props" />
            </Anchor>
        </div>
    </HView>
}