import { Slider, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Slider step={10}/>
        <Slider step={0.1}/>
    </Space>
}