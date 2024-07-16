import { Tree } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [selected, setSelected]: any = createSignal('xihu');

    const data = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ]

    return <Tree data={data} selected={[selected, setSelected]} onNodeSelect={(node: any) => {
        console.log(node);
    }}/>
}
