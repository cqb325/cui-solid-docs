import { Button, Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {type: 'index', title: '序号', width: '80px', fixed: 'left'},
        {name: 'name', title: '名称', width: '150px', fixed: 'left'},
        {name: 'x', title: 'X', width: '300px'},
        {name: 'y', title: 'Y', width: '300px'},
        {name: 'date', title: '日期', width: '200px', fixed: 'right'},
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
    let table: any;

    return <Space dir="v">
        <Table columns={columns} data={data} border highlight ref={table}/>
        <div>
            <Button type="primary" onClick={() => {
                table.clearSelect();
            }}>清除高亮</Button>
        </div>
    </Space>
}