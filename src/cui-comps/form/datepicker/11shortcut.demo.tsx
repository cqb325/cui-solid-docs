import { Button, Datepicker, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal<any[]>(['2023-02-01', '2023-05-15']);

    return <Datepicker clearable value={[value, setValue]} stick shortCuts={<Space dir="v">
        <Button type="text" onClick={() => {
            const now = new Date();
            const start = new Date();
            start.setDate(start.getDate() - 6);
            setValue([start, now]);
        }}>一周</Button>
        <Button type="text" onClick={() => {
            const now = new Date();
            const start = new Date();
            start.setDate(start.getDate() - 30);
            setValue([start, now]);
        }}>一个月</Button>
    </Space>} type="dateRange"/>
}