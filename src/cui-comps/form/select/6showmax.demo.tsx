import { Option, Select, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Select multi showMax={2}>
            <Option value={1} label="北京" />
            <Option value={2} label="上海" />
            <Option value={3} label="杭州" />
            <Option value={4} label="武汉" />
            <Option value={5} label="天津" />
        </Select>

        <Select multi showMax='auto' style="width: 200px">
            <Option value={1} label="北京" />
            <Option value={2} label="上海" />
            <Option value={3} label="杭州" />
            <Option value={4} label="武汉" />
            <Option value={5} label="天津" />
        </Select>
    </Space>
}
