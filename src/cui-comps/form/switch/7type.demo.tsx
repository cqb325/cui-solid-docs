import { Switch as CSwitch, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch />
        <CSwitch round={false}/>
    </Space>
}
