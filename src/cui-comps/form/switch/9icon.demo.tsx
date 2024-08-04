import { Switch as CSwitch, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch icon={<Icon name="settings" color="var(--cui-primary-color)"/>}/>
        <CSwitch size="large" icon={[<Icon name="arrow-left" size={20} color="var(--cui-color-text-2)"/>, <Icon size={20} name="arrow-right" color="var(--cui-color-text-2)"/>]}/>
    </Space>
}
