import { Space, Tree, Button } from "cui-solid";

export default () => {
    let tree: any;
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
        <Tree data={data} checkable ref={tree} />
        <Space dir="v">
            <Space>
                <Button type="primary" onClick={() => {
                    tree.expandAll()
                }}>Expand All</Button>

                <Button type="primary" onClick={() => {
                    tree.collapseAll()
                }}>Collapse All</Button>
            </Space>

            <Space>
                <Button type="primary" onClick={() => {
                    tree.expandNode('beijing', true)
                }}>Expand Node</Button>

                <Button type="primary" onClick={() => {
                    tree.expandNode('beijing', false)
                }}>Collapse Node</Button>
            </Space>
        </Space>
    </Space>
}
