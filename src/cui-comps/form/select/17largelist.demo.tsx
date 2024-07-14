import { Option, Select } from "cui-solid"
import { For } from "solid-js";

export default () => {
    const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))

    return <Select filter>
        <For each={largeArray}>
            {(item, index) => {
                return <Option value={item.value} label={`${new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row ` + index()} />
            }}
        </For>
    </Select>
}