import { Button, Option, Select, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [city, setCity] = createSignal<number>();

    return <Space>
        <Select value={[city, setCity]} clearable emptyOption="全部" onChange={(v: any) => {
            console.log(v);
        }}>
            <Option value={1} label="北京" />
            <Option value={2} label="上海" />
            <Option value={3} label="杭州" />
            <Option value={4} label="武汉" />
            <Option value={5} label="天津" />
        </Select>
        <Button type="primary" onClick={() => {
            setCity(2);
        }}>改变值</Button>
    </Space>
}