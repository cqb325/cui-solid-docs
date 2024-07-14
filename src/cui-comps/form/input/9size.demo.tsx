import { Input, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Input clearable size="large"/><Input clearable/><Input clearable size="small"/>
    </Space>
}