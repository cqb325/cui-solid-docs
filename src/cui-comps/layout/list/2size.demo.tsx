import { For } from "solid-js";
import { List } from "cui-solid"


export default () => {
    const data = [
        {id: '1', desc: '这是一段文本。', content: ''},
        {id: '2', desc: '这是一段文本。', content: ''},
        {id: '3', desc: '这是一段文本。', content: ''}
    ];

    return <List border size="small" onSelect={(item: any) => {
        console.log(item);
    }} head="Header" foot="Footer">
        <For each={data}>
            {(item) => {
                return <List.Item id={item.id} desc={item.desc} data={item} />
            }}
        </For>
    </List>
}