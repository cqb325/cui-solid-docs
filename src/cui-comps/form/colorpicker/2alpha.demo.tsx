import { ColorPicker, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <ColorPicker value={'rgba(25, 190,107, .5)'} alpha/>
    </Space>
}