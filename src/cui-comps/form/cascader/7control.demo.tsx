import { Button, Cascader, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue]: any[] = createSignal();

    const data = [
        {
            value: 'beijing', title: '北京',
            children: [
                {value: 'gugong', title: '故宫'},
                {value: 'tiantan', title: '天坛'},
                {value: 'wangfujing', title: '王府井'},
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
                            disabled: true
                        },
                        {
                            value: 'shizilin',
                            title: '狮子林',
                        }
                    ]
                }
            ],
        }
    ]

    return <Space>
        <Cascader data={data} value={[value, setValue]} />
        <Button type="primary" onClick={() => {
            setValue(['jiangsu','suzhou','shizilin'])
        }}>
            设置值
        </Button>
    </Space>
}