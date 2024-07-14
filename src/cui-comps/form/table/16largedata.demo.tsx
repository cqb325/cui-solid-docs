import { Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {type: 'index', title: '序号', width: '80px'},
        {name: 'name', title: '名称', width: '150px'},
        {name: 'x', title: 'X'},
        {name: 'y', title: 'Y'},
        {name: 'date', title: '日期', width: '200px'}
    ];

    const largedata = [];
    for (let i = 0; i < 1000; i++) {
        largedata.push({
            id: i,
            name: 'name_' + i,
            x: Math.random() + 100,
            y: Math.random() + 30,
            _disabled: i % 3 === 0,
            date: new Date().toLocaleDateString()
        });
    }

    return <Space dir="v">
        <Table columns={columns} data={largedata} border virtual height={300}/>
    </Space>
}