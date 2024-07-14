import { Button, Icon, Progress, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal(0);

    return <>
        <Space dir="h" inline>
            <Progress type="circle" value={value()} strokeColor={[
                {percent: 20, color: '#108ee9'},
                {percent: 50, color: '#87d068'},
                {percent: 70, color: '#d9363e'}
            ]}/>
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