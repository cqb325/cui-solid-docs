import { RadioGroup, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <RadioGroup data={[{label: '苹果', value: '1', disabled: true}, {label: '桃子', value: '2'}]} />
        <RadioGroup disabled data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
    </Space>
}