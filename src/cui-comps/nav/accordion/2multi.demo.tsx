import { Accordion, Button, HView, View, VView } from "cui-solid"
import { F7Flag, F7GearAltFill, F7Speedometer } from "cui-solid-icons/f7";
import { createSignal } from "solid-js";

export default () => {
    const [activeKey, setActiveKey] = createSignal(['a2']);

    const centerStyle = {
        'justify-content': 'center'
    }

    return <VView size="300px">
        <HView class="components-layout-demo" size="450px">
            <View size="250px" style={{'text-align': 'initial', overflow: 'auto'}} class="layout-demo-sider">
                <Accordion activeKey={[activeKey, setActiveKey]} multi onSelect={(name: string, open: boolean, v: any) => {
                    console.log(name, open, v);
                }}>
                    <Accordion.Item name="a1" title="Title1" icon={<F7Speedometer />}>content1</Accordion.Item>
                    <Accordion.Item name="a2" title="Title2" icon={<F7GearAltFill/>}>
                        <p>content2</p>
                        <p>content2</p>
                        <p>content2</p>
                        <p>content2</p>
                    </Accordion.Item>
                    <Accordion.Item name="a3" title="Title3" icon={<F7Flag/>}>
                        <p>content3</p>
                        <p>content3</p>
                        <p>content3</p>
                        <p>content3</p>
                    </Accordion.Item>
                </Accordion>
            </View>
            <VView style={centerStyle}>
                <View class="layout-demo-header" size="64px" style={centerStyle} />
                <View style={centerStyle}>
                    <Button onClick={() => {
                        setActiveKey(['a1']);
                    }}>更新</Button>
                </View>
                <View class="layout-demo-header" size="64px" style={centerStyle} />
            </VView>
        </HView>
    </VView>
}
