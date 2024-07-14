import { Switch as CSwitch, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch size="large"/>
        <CSwitch />
        <CSwitch size="small"/>
    </Space>
}