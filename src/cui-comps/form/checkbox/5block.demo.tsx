import { CheckboxGroup, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <CheckboxGroup block data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
    </Space>
}