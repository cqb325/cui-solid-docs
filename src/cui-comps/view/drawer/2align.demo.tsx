import { Button, Drawer, RadioGroup, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);
    const [align, setAlign] = createSignal<'right'|'left'|'top'|'bottom'>('right');

    return <>
        <Drawer visible={[visible, setVisible]} title="侧边栏" align={align()}>
            content
        </Drawer>
        <Space dir="h">
            <RadioGroup stick value={[align, setAlign]} data={[{label: 'Left', value: 'left'}, {label: 'Top', value: 'top'}, {label: 'Right', value: 'right'}, {label: 'Bottom', value: 'bottom'}]} onChange={(v: any) => {
                setAlign(v);
            }} />
            <Button type="primary" onClick={() => {
                setVisible(true);
            }}>打开</Button>
        </Space>
    </>
}