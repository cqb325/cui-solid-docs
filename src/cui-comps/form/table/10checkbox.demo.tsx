import { Button, Space, Table } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [selectedRowKeys, setSelectedRowKeys] = createSignal<any[]>([]);
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

    const data: any[] = [];
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

    const data2: any[] = [];
    for (let i = 0; i < 5; i++) {
        data2.push({
            id: 5 + i,
            name: 'name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }

    const [d, setD] = createSignal(data);

    return <Space dir="v">
        <Table columns={columns} data={d()} selectedRowKeys={[selectedRowKeys, setSelectedRowKeys]}/>
        <Space>
            <Button type="primary" onClick={() => {
                setSelectedRowKeys([1,2]);
            }}>
                勾选
            </Button>
            <Button type="primary" onClick={() => {
                setSelectedRowKeys([]);
            }}>
                置空
            </Button>
            <Button type="primary" onClick={() => {
                setD(data2);
            }}>
                设置数据
            </Button>
            <Button type="primary" onClick={() => {
                setD(data);
            }}>
                重置数据
            </Button>
        </Space>
    </Space>
}
