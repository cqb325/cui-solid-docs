import { Switch as CSwitch, Space } from "cui-solid"
import { FeatherArrowLeft, FeatherArrowRight, FeatherSettings } from "cui-solid-icons/feather"

export default () => {
    return <Space dir="h">
        <CSwitch icon={<FeatherSettings color="var(--cui-primary-color)"/>}/>
        <CSwitch size="large" icon={[<FeatherArrowLeft size={20} color="var(--cui-color-text-2)"/>, <FeatherArrowRight size={20} color="var(--cui-color-text-2)"/>]}/>
    </Space>
}
