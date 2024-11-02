import { Steps } from "cui-solid"
import { F7GearAltFill, F7LockFill } from "cui-solid-icons/f7";
import { createSignal } from "solid-js";

export default () => {
    const [current, setCurrent] = createSignal(0);

    return <Steps current={current()}>
        <Steps.Step title="已完成"/>
        <Steps.Step title="进行中" status="process" icon={<F7GearAltFill size={26}/>}/>
        <Steps.Step title="错误" status="error"/>
        <Steps.Step title="告警" status="warning"/>
        <Steps.Step title="等待" status="wait" icon={<F7LockFill size={26}/>}/>
    </Steps>
}
