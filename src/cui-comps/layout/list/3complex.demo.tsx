import { For } from "solid-js";
import { Avatar, Button, List, Space } from "cui-solid"

import img from './avatar.png';

export default () => {
    const data = [
        {id: '1', desc: '这是一段文本。', content: ''},
        {id: '2', desc: '这是一段文本。', content: ''},
        {id: '3', desc: '这是一段文本。', content: ''}
    ];

    return <List border head="Header" foot="Footer">
        <For each={data}>
            {(item) => {
                return <List.Item avatar={<Avatar src={img}/>}
                    id={item.id} title="Title" desc={item.desc} data={item} actions={<Space>
                        <Button type="text" size="small" onClick={() => {console.log(item);
                        }}>Edit</Button>
                        <Button type="text" size="small">More</Button>
                    </Space>}>
                        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
                        具体内容具体内容具体内容具体内容具体内容具体内容
                        具体内容具体内容具体内容具体内容
                </List.Item>
            }}
        </For>
    </List>
}