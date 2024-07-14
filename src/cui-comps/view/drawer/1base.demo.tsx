import { Button, Drawer } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <>
        <Drawer visible={[visible, setVisible]} title="侧边栏">
            content
        </Drawer>
        <Button type="primary" onClick={() => {
            setVisible(true);
        }}>打开</Button>
    </>
}