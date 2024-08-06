import { Button, Space, Table, Exception } from "cui-solid"

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

    return <Space dir="v">
        <Table columns={columns} data={[]} border empty={<Exception type="empty" showAction={false} showDesc={false}/>}/>
    </Space>
}
