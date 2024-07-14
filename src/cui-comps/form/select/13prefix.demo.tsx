import { Icon, Option, Select } from "cui-solid"

export default () => {

    return <Select clearable prefix={<Icon name="tag"/>}>
        <Option value={1} label="北京" />
        <Option value={2} label="上海" />
        <Option value={3} label="杭州" />
        <Option value={4} label="武汉" />
        <Option value={5} label="天津" />
    </Select>
}