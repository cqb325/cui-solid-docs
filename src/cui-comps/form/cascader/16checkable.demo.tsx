import { Button, Cascader, Space, TreeCheckMod } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const data = [
        {
            value: 'beijing', title: '北京', checkable: false,
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
            checkable: false,
            children: [
                {
                    value: 'nanjing',
                    title: '南京'
                },
                {
                    value: 'suzhou',
                    title: '苏州',
                }
            ],
        }
    ];
    const [value, setValue] = createSignal<any[]>([]);
    const valueMap: any = {};
    const onBeforeChecked = (item: any, checked: boolean) => {
        if (checked) {
            valueMap[item._parent.value] = item.value;
        } else {
            delete valueMap[item._parent.value];
        }
        queueMicrotask(() => {
            setValue(Object.values(valueMap));
        })
        return true;
    }

    return <Space>
        <Cascader data={data} value={[value, setValue]} multi mode={TreeCheckMod.CHILD}
        beforeChecked={onBeforeChecked}
        tagRender={(item: any) => {
            const labels = [item.title];
            while (item._parent) {
                item = item._parent;
                labels.unshift(item.title);
            }
            return labels.join(' / ');
        }}/>
    </Space>
}
