import { Button, TreeCheckMod, Space, Tree } from "cui-solid";

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
        <Tree data={data} checkable directory ref={tree}/>

        <Space dir="v">
            <Space dir="h">
                <Button type="primary" onClick={() => {
                    tree.checkNode('xihu', true);
                }}>勾选</Button>

                <Button type="primary" onClick={() => {
                    tree.checkNode('xihu', false);
                }}>取消勾选</Button>

                <Button type="primary" onClick={() => {
                    tree.checkAll();
                }}>全选勾选</Button>

                <Button type="primary" onClick={() => {
                    tree.uncheckAll();
                }}>取消全选</Button>
            </Space>
            <Space>
                <Button type="primary" onClick={() => {
                    console.log(tree.getChecked(TreeCheckMod.FULL));
                }}>getChecked(FULL)</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getChecked(TreeCheckMod.HALF));
                }}>getChecked(HALF)</Button>
            </Space>
            <Space>
                <Button type="primary" onClick={() => {
                    console.log(tree.getChecked(TreeCheckMod.CHILD));
                }}>getChecked(CHILD)</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getChecked(TreeCheckMod.SHALLOW));
                }}>getChecked(SHALLOW)</Button>
            </Space>
            <Space>
                <Button type="primary" onClick={() => {
                    console.log(tree.getCheckedKeys(TreeCheckMod.FULL));
                }}>getCheckedKeys(FULL)</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getCheckedKeys(TreeCheckMod.HALF));
                }}>getCheckedKeys(HALF)</Button>
            </Space>
            <Space>
                <Button type="primary" onClick={() => {
                    console.log(tree.getCheckedKeys(TreeCheckMod.CHILD));
                }}>getCheckedKeys(CHILD)</Button>
                <Button type="primary" onClick={() => {
                    console.log(tree.getCheckedKeys(TreeCheckMod.SHALLOW));
                }}>getCheckedKeys(SHALLOW)</Button>
            </Space>
        </Space>
    </>
}
