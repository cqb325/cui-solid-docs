import { Switch as CSwitch, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch size="large" loading/>
        <CSwitch loading checked/>
        <CSwitch size="small" loading/>
    </Space>
}