import { Button, Space, Table } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const columns = [
        {type: 'checkbox', width: '55px' },
        {name: 'name', title: '名称', width: '150px'},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button type="text" size="small" ghost>添加</Button>
                <Button type="text" size="small" ghost>修改</Button>
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
    type KeyType = string|number;
    const [selectedRowKeys, setSelectedRowKeys] = createSignal<KeyType[]>([]);

    return <Space dir="v">
        <Table columns={columns} data={data} selectedRowKeys={[selectedRowKeys, setSelectedRowKeys]}/>
        <div>
            <Button type="primary" onClick={() => {
                setSelectedRowKeys([1,2]); // 清除选中
            }}>选中</Button>
        </div>
    </Space>
}