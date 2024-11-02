import { Button, Progress, Space } from "cui-solid";
import { FeatherMinus, FeatherPlus } from "cui-solid-icons/feather";
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal(0);

    return <>
        <Space dir="h" inline>
            <Progress type="circle" value={value()}/>
        </Space>
        <Space dir="h">
            <Button type="primary" icon={<FeatherPlus/>} onClick={() => {
                setValue(value() + 5);
            }} />
            <Button type="primary" icon={<FeatherMinus/>} onClick={() => {
                setValue(value() - 5);
            }} />
        </Space>
    </>
}
