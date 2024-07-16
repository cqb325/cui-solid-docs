import { TableStyleLayout, TableStyleLayoutRow, TableStyleLayoutLabel, TableStyleLayoutValue, TableStyleLayoutCol, Table } from "cui-solid"


export default () => {
    const columns = [
        { type: 'index', title: '序号', width: 68 },
        { name: 'name', title: '字段名称' },
        { name: 'type', title: '字段类型' }
    ];

    return <TableStyleLayout labelWidth={100}>
        <TableStyleLayoutRow>
            <TableStyleLayoutLabel>用户名</TableStyleLayoutLabel>
            <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
            <TableStyleLayoutLabel>部门</TableStyleLayoutLabel>
            <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
            <TableStyleLayoutLabel>联系方式</TableStyleLayoutLabel>
            <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
        </TableStyleLayoutRow>
        <TableStyleLayoutRow>
            <TableStyleLayoutCol flex={0.333}>
                <TableStyleLayoutLabel>职位</TableStyleLayoutLabel>
                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
            </TableStyleLayoutCol>
            <TableStyleLayoutCol flex={2 / 3}>
                <TableStyleLayoutLabel>职责</TableStyleLayoutLabel>
                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
            </TableStyleLayoutCol>
        </TableStyleLayoutRow>
        <TableStyleLayoutRow>
            <TableStyleLayoutLabel verticalAlign="start">字段信息</TableStyleLayoutLabel>
            <TableStyleLayoutValue>
                <Table columns={columns} data={[]} border size="small"/>
            </TableStyleLayoutValue>
        </TableStyleLayoutRow>
    </TableStyleLayout>
}
