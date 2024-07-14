import { Input, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Input type="text" maxLength={20} wordCount/>
        <Input type="textarea" maxLength={20} wordCount/>
    </Space>
}