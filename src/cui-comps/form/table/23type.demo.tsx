import { Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {type: 'index', title: '序号', width: 90},
        {name: 'name', title: '姓名', width: 90},
        {type: 'enum', enum: {0: '禁用', 1: '启用'},name: 'status', title: '状态', width: 90},
        {type: 'date', name: 'date', title: '日期', width: '200px'},
        {type: 'datetime',name: 'datetime', title: '时间', width: '200px'},
    ];

    const data = [
        {name: '张三', status: 1, date: '2020-01-01', datetime: '2020-01-01 12:00:00'},
        {name: '李四', status: 0, date: '2020-01-02', datetime: '2020-01-02 12:00:00'},
        {name: '王五', status: 1, date: '2020-01-03', datetime: '2020-01-03 12:00:00'},
        {name: '赵六', status: 0, date: '2020-01-04', datetime: '2020-01-04 12:00:00'},
        {name: '钱七', status: 1, date: '2020-01-05', datetime: '2020-01-05 12:00:00'},
        {name: '孙八', status: 0, date: '2020-01-06', datetime: '2020-01-06 12:00:00'},
        {name: '周九', status: 1, date: '2020-01-07', datetime: '2020-01-07 12:00:00'},
        {name: '吴十', status: 0, date: '2020-01-08', datetime: '2020-01-08 12:00:00'},
    ];

    return <Space dir="v">
        <Table columns={columns} data={data} border/>
    </Space>
}
