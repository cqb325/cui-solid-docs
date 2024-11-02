import { Button, Cascader, Space } from "cui-solid"

export default () => {
    const data = [
        {
            value: 'beijing', title: '北京',
            children: [
                {value: 'gugong', title: '故宫'},
                {value: 'tiantan', title: '天坛'},
                {value: 'wangfujing', title: '王府井xxxxxxxxxxx'},
                {value: 'wangfujing2', title: '王府井2', disabled: true},
                {value: 'wangfujing3', title: '王府井3'},
                {value: 'wangfujing4', title: '王府井4'},
                {value: 'wangfujing5', title: '王府井5'},
                {value: 'wangfujing6', title: '王府井6'},
                {value: 'wangfujing7', title: '王府井7'},
                {value: 'wangfujing8', title: '王府井8'},
                {value: 'wangfujing9', title: '王府井9'},
            ]
        },
        {
            value: 'jiangsu',
            title: '江苏',
            children: [
                {
                    value: 'nanjing',
                    title: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            title: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    title: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            title: '拙政园',
                            disabled: false
                        },
                        {
                            value: 'shizilin',
                            title: '狮子林',
                        }
                    ]
                }
            ],
        }
    ];

    return <Space>
        <Cascader data={data} triggerRender={(text, values) => {
            return <Button>{text || '请选择'}</Button>
        }}/>
    </Space>
}
