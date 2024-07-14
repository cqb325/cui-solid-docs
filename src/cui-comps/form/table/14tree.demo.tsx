import { Space, Table } from "cui-solid"

export default () => {
    const columns = [
        {
            title: 'Name',
            name: 'name',
            tree: true,
            width: '100px',
        },
        {
            title: 'Age',
            name: 'age',
            width: '100px',
        },
        {
            title: 'Address',
            name: 'address',
            width: '300px',
        }
    ];

    const data = [
        {
            id: '100',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park'
        },
        {
            id: '101',
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            _showChildren: true,
            children: [
                {
                    id: '10100',
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    id: '10101',
                    name: 'Joe Blackn',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    id: '10102',
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    children: [
                        {
                            id: '1010200',
                            name: 'Jim Green',
                            age: 24,
                            address: 'New York No. 1 Lake Park'
                        }
                    ]
                }
            ]
        },
        {
            id: '102',
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
        },
        {
            id: '103',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park'
        }
    ];

    return <Space dir="v">
        <Table columns={columns} data={data} border />
    </Space>
}