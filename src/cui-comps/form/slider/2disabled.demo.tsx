import { Slider, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Slider disabled/>
        <Slider disabled range value={[30, 70]}/>
    </Space>
}