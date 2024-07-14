import { CheckboxGroup, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <CheckboxGroup data={[{label: '苹果', value: '1', disabled: true}, {label: '桃子', value: '2'}]} />
        <CheckboxGroup disabled data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
    </Space>
}