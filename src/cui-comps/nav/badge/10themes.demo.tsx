import { BadgeRibbon, Card, Space } from "cui-solid"
import { For } from "solid-js"

export default () => {
    return <Space dir="v" size={24} >
        <Space inline wrap>
            <For each={['primary', 'success', 'warning', 'info', 'error']}>
                {color => <BadgeRibbon text={color} color={color}>
                    <Card title="Card Title" bordered></Card>
                </BadgeRibbon>}
            </For>
        </Space>
        <Space inline wrap>
            <For each={['blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                {color => <BadgeRibbon text={color} color={color}>
                    <Card title="Card Title" bordered></Card>
                </BadgeRibbon>}
            </For>
        </Space>
    </Space>
}
