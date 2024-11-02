import { Button, Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {type: 'checkbox', width: '55px' },
        {name: 'name', title: '名称', width: '150px'},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button theme="borderless" size="small">添加</Button>
                <Button theme="borderless" size="small">修改</Button>
            </Space>
        }}
    ];

    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push({
            id: i,
            name: 'name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }

    return <Space dir="v">
        <Table columns={columns} data={data} border title={<div>Title</div>} footer={<div>Footer</div>}/>
    </Space>
}
