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
        <Cascader data={data} loadData={(item: any) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (item.value === 'beijing') {
                        resolve([
                            {value: 'gugong', title: '故宫'},
                            {value: 'tiantan', title: '天坛'},
                            {value: 'wangfujing', title: '王府井'},
                        ]);
                    }
                    if (item.value === 'jiangsu') {
                        resolve([
                            {
                                value: 'nanjing',
                                title: '南京',
                            },
                            {
                                value: 'suzhou',
                                title: '苏州',
                            }
                        ]);
                    }
                }, 1000);
            })
        }}/>
    </Space>
}