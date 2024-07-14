import { Switch as CSwitch, message, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch labels={['开', '关']}/>
        <CSwitch labels={['ON', 'OFF']} values={[1, 0]} onChange={(v: number) => {
            message.info({
                content: '值:' + v,
                duration: 1
            });
        }}/>
    </Space>
}