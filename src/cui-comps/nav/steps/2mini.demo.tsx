import { Button, Space, Steps } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [current, setCurrent] = createSignal(0);

    return <Space dir="v">
        <Steps current={current()} size="small">
            <Steps.Step title="First" description="This is a description." />
            <Steps.Step title="Second" description="This is a description." />
            <Steps.Step title="Third" description="This is a description." />
        </Steps>
        <Space dir="h">
            <Button type="primary" onClick={() => {
                setCurrent(current() - 1);
            }}>Prev</Button>
            <Button type="primary" onClick={() => {
                setCurrent(current() + 1);
            }}>Next</Button>
        </Space>
    </Space>
}