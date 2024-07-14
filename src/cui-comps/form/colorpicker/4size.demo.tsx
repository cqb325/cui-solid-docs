import { ColorPicker, Space } from "cui-solid"

export default () => {
    return <Space dir="h" align="center">
        <ColorPicker value={'#19be6b'} size="large" />
        <ColorPicker value={'#19be6b'} />
        <ColorPicker value={'#19be6b'} size="small"/>
    </Space>
}