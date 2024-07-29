import { Button, Cascader, Space } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const data = [
        {
            value: 'beijing', title: '北京', loading: true
        },
        {
            value: 'jiangsu',
            title: '江苏',
            loading: true,
        }
    ];

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
