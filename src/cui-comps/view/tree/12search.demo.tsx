import { Space, Tree, Input } from "cui-solid";

export default () => {
    let treeSearch: any;
    const data = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ];

    return <Space dir="v">
        <Input onChange={(keyword: string) => {
            treeSearch.filter(keyword);
        }}/>
        <Tree ref={treeSearch} data={data} checkable directory/>
    </Space>
}
