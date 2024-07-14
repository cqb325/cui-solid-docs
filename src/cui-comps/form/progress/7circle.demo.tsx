import { Button, Icon, Progress, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal(0);

    return <>
        <Space dir="h" inline>
            <Progress type="circle" value={value()}/>
        </Space>
        <Space dir="h">
            <Button type="primary" icon={<Icon name="plus"/>} onClick={() => {
                setValue(value() + 5);
            }} />
            <Button type="primary" icon={<Icon name="minus"/>} onClick={() => {
                setValue(value() - 5);
            }} />
        </Space>
    </>
}