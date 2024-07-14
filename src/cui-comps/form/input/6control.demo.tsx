import { Button, Input, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [count, setCount] = createSignal(1);

    return <Space dir="h">
        <Input value={[count, setCount]}/>
        <Button onClick={() => {
            setCount(count() + 1);
        }}>Add</Button>
    </Space>
}