import { Button, DropdownItem, DropdownMenu, Space, Tree } from "cui-solid";

export default () => {
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

    let tree: any;

    return <>
        <Tree data={data} multi directory ref={tree}/>

        <Space dir="v">
            <Space dir="h">
                <Button onClick={() => {
                    tree.checkNode('xihu', true);
                }}>勾选</Button>
            </Space>
            <Space>
                <Button type="primary" onClick={() => {
                    console.log(tree.getAllChecked());
                }}>AllChecked</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getHalfChecked());
                }}>HalfChecked</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getChildChecked());
                }}>ChildChecked</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getShallowChecked());
                }}>Shallow</Button>
            </Space>
        </Space>
    </>
}