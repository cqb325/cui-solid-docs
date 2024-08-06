import { Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {name: 'name', title: '姓名', width: 90},
        {name: 'subject', title: '科目', children: [
            {name: 'mainSubject', title: '主课', children: [
                {name: 'chinese', title: '语文', width: 200, resize: true, sort: true},
                {name: 'math', title: '数学', width: 200, minWidth: 100, resize: true, sort: true},
                {name: 'english', title: '英语', minWidth: 200}
            ]},
            {name: 'minorSubject', title: '副课', children: [
                {name: 'physics', title: '物理', minWidth: 200},
                {name: 'chemistry', title: '化学', minWidth: 200}
            ]},
            {name: 'tiyu', title: '体育', minWidth: 200}
        ]},
        {name: 'date', title: '日期', width: '200px'},
    ];

    const data = [
        {name: '张三', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '李四', chinese: 80, math: 90, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-02'},
        {name: '王五', chinese: 70, math: 80, english: 90, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-03'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
        {name: '赵六', chinese: 90, math: 80, english: 70, physics: 60, chemistry: 50, tiyu: 20, date: '2020-01-01'},
    ]

    return <Space dir="v">
        <Table columns={columns} data={data} border />
    </Space>
}
