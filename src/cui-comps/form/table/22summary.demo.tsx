import { Button, Space, Table } from "cui-solid"
import type { ColumnProps } from "cui-solid"

export default () => {
    const columns = [
        {type: 'index', title: '序号', width: '80px' },
        {name: 'name', title: '名称'},
        {name: 'x', title: 'X'},
        {name: 'y', title: 'Y'},
        {name: 'date', title: '日期'},
        {name: '_op', title: '操作', width: '150px', render: (v: any, column: any, row: any) => {
            return <Space>
                <Button type="text" size="small" ghost>添加</Button>
                <Button type="text" size="small" ghost>修改</Button>
            </Space>
        }}
    ];

    const data = [
        {name: '张三', x: '1', y: '2', date: '2021-01-01'},
        {name: '李四', x: '3', y: '4', date: '2021-01-02'},
        {name: '王五', x: '5', y: '6', date: '2021-01-03'},
        {name: '赵六', x: '7', y: '8', date: '2021-01-04'},
        {name: '钱七', x: '9', y: '10', date: '2021-01-05'},
        {name: '孙八', x: '11', y: '12', date: '2021-01-06'},
        {name: '周九', x: '13', y: '14', date: '2021-01-07'},
        {name: '吴十', x: '15', y: '16', date: '2021-01-08'},
    ];

    return <Space dir="v">
        <Table columns={columns} data={data} border showSummary/>
        <Table columns={columns} data={data} border height={300} showSummary summaryMethod={(columns, data) => {
            const row: any = {};
            columns.forEach((col: ColumnProps, index: number) => {
                const key = col.name!;
                if (index === 0) {
                    row[key] = '共计';
                    return;
                }
                const values = data.map(item => Number(item[key]));
                if (!values.every(value => isNaN(value))) {
                    const v = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    row[key] = v + '单位';
                } else {
                    row[key] = 'N/A';
                }
            });
            return row;
        }}/>
    </Space>
}
