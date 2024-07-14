import { Button, Icon, Progress, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal(0);

    return <Space dir="v">
        <Progress value={value()} />
        <Space dir="h">
            <Button type="primary" icon={<Icon name="plus"/>} onClick={() => {
                setValue(value() + 1);
            }} />
            <Button type="primary" icon={<Icon name="minus"/>} onClick={() => {
                setValue(value() - 1);
            }} />
        </Space>
    </Space>
}