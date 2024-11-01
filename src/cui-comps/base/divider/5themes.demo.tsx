import { Divider } from "cui-solid"
import { For } from "solid-js"

export default () => {
    return <section>
        <For each={['primary','success','info', 'warning','error', 'blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                {(color) => {
                    return <>
                        <Divider align="left" theme={color}>{color}</Divider>
                    </>
                }}
        </For>
        <p>自定义颜色.</p>
        <For each={['#f50', '#2db7f5', '#87d068', '#108ee9']}>
            {(color) => {
                return <>
                    <Divider align="left" theme={color}>{color}</Divider>
                </>
            }}
        </For>
    </section>
}
