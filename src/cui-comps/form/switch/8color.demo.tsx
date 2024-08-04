import { Switch as CSwitch, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch labels={['去球场打球', '在家中休息']} colors={['red', 'green']}/>
    </Space>
}
