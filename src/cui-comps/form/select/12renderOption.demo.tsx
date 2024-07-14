import { BothSide, Option, Select } from "cui-solid"

export default () => {

    return <Select clearable renderOption={(item: any) => {
        return <BothSide>
            <div>{item.label}</div>
            <div>{item.value}</div>
        </BothSide>
    }}>
        <Option value={1} label="北京" />
        <Option value={2} label="上海" />
        <Option value={3} label="杭州" />
        <Option value={4} label="武汉" />
        <Option value={5} label="天津" />
    </Select>
}