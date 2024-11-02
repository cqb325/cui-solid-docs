import { Input, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Input type="password"/>
        <Input type="password" password/>
    </Space>
}
