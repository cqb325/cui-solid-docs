import { CountDown, Space } from "cui-solid"

export default () => {
    const start = Date.now() + 3900000;

    return <Space dir="h" size={100}>
        <CountDown value={start} />
        <CountDown value={start} format="HH时mm分ss秒" prefix="剩余时间："/>
    </Space>
}