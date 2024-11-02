import { Button, Progress, Space } from "cui-solid";
import { FeatherMinus, FeatherPlus } from "cui-solid-icons/feather";
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal(0);

    return <Space dir="v">
        <Progress value={value()} />
        <Space dir="h">
            <Button type="primary" icon={<FeatherPlus/>} onClick={() => {
                setValue(value() + 1);
            }} />
            <Button type="primary" icon={<FeatherMinus/>} onClick={() => {
                setValue(value() - 1);
            }} />
        </Space>
    </Space>
}
