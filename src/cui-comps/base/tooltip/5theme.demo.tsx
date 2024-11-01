import { Button, Space, Tag, Tooltip } from "cui-solid"
import { For } from "solid-js"

export default () => {
    return <Space dir="v" size={24}>
        <Space wrap>
            <For each={['light', 'primary','success','info', 'warning','error', 'blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                {(color) => {
                    return <Tooltip align="top" theme={color} arrow content={
                <div>
                    <p>{color}</p>
                </div>
            }>
                <Button>{color}</Button>
            </Tooltip>
                }}
            </For>
        </Space>

        <Space>
            <For each={['#f50', '#2db7f5', '#87d068', '#108ee9']}>
                {(color) => {
                    return <Tooltip align="top" trigger="click" theme={color} arrow content={
                <div>
                    <p>{color}</p>
                </div>
            }>
                <Tag>{color}</Tag>
            </Tooltip>
                }}
            </For>
        </Space>
    </Space>
}
