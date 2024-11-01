import { Avatar, Input, Space } from "cui-solid"
import { createSignal } from "solid-js"

export default () => {
    const [value, setValue] = createSignal('Name');
    return <Space dir="h" align="center">
        <Avatar>{value()}</Avatar>
        <Input value={[value, setValue]} style={{width: '100px'}}/>
    </Space>
}
