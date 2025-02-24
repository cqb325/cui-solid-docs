import { Button, Space, Table } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [height, setHeight] = createSignal(400);
    const [loading, setLoading] = createSignal(false);

    const columns = [
        {type: 'index', title: '序号', width: 90},
        {name: 'name', title: '姓名', width: 90},
        {type: 'enum', enum: {0: '禁用', 1: '启用'},name: 'status', title: '状态', width: 90},
        {type: 'date', name: 'date', title: '日期', width: '200px'},
        {type: 'datetime',name: 'datetime', title: '时间', width: '200px'},
    ];

    const [data, setData] = createSignal([
        {name: '张三', status: 1, date: '2020-01-01', datetime: '2020-01-01 12:00:00'},
        {name: '李四', status: 0, date: '2020-01-02', datetime: '2020-01-02 12:00:00'},
        {name: '王五', status: 1, date: '2020-01-03', datetime: '2020-01-03 12:00:00'},
        {name: '赵六', status: 0, date: '2020-01-04', datetime: '2020-01-04 12:00:00'},
        {name: '钱七', status: 1, date: '2020-01-05', datetime: '2020-01-05 12:00:00'},
        {name: '孙八', status: 0, date: '2020-01-06', datetime: '2020-01-06 12:00:00'},
        {name: '周九', status: 1, date: '2020-01-07', datetime: '2020-01-07 12:00:00'},
        {name: '吴十', status: 0, date: '2020-01-08', datetime: '2020-01-08 12:00:00'},
    ]);

    return <Space dir="v">
        <div style={{height: height() + 'px',
            display: 'flex',
            'flex-direction': 'column',
            'background-color': '#f7f7f7'}}>
            <Table columns={columns} height="fitContainer" data={data()} border loading={loading()}/>
        </div>
        <Space>
            <Button type="primary" onClick={() => {
                setLoading(true);
                setTimeout(() => {
                    const data: any[] = [];
                    for (let i = 0; i < 5 + Math.random() * 10; i++) {
                        data.push({
                            name: 'name_' + i,
                            status: Math.round(Math.random()),
                            date: '2020-01-01',
                            datetime: '2020-01-01 12:00:00',
                        });
                    }
                    setData(data)
                    setLoading(false);
                }, 500);
            }}>修改数据</Button>
            <Button type="primary" onClick={() => {
                setHeight(400 + Math.random() * 200);
            }}>设置高度</Button>
        </Space>
    </Space>
}
