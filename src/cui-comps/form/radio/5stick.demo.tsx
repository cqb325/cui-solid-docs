import { Avatar, RadioGroup, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Space dir="h">
            <RadioGroup stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
            <RadioGroup disabled stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
            <RadioGroup stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2', disabled: true}, {label: '香蕉', value: '3'}]} />
        </Space>
        <Space dir="h">
            <RadioGroup stick value={'1'} data={[{label: <Space dir="v"><Avatar /><label>苹果</label></Space>, value: '1'},
                {label: <Space dir="v"><Avatar /><label>桃子</label></Space>, value: '2'},
                {label: <Space dir="v"><Avatar /><label>香蕉</label></Space>, value: '3'}]} />
        </Space>
        <Space dir="v">
            <RadioGroup stick block value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
        </Space>
    </Space>
}