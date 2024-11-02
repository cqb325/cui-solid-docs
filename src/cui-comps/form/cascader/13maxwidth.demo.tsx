import { Cascader, Space } from "cui-solid"

export default () => {
    return <Space>
        <Cascader data={[
            {value: 'A', title: 'A', children: [
                {value: 'B', title: 'B', children: [
                    {value: 'C', title: 'C', children: [
                        {value: 'D', title: 'D', children: [
                            {value: 'E', title: 'E'},
                        ]},
                    ]},
                ]},
            ]},
        ]} />
    </Space>
}
