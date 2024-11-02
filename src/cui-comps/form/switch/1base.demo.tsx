import { message, Switch as CSwitch } from "cui-solid"

export default () => {
    return <CSwitch onChange={(v: boolean) => {
        message.info({
            content: '状态改变:' + v,
            duration: 1
        });
    }}/>
}
