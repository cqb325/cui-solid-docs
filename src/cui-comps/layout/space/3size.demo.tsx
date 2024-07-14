import { Button, Slider, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [size, setSize] = createSignal(10);

    return <>
        <Space size={size()}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </Space>
        <Slider value={[size, setSize]}/>
    </>
}