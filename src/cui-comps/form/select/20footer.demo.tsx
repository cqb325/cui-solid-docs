import { Link, Option, Select, Space } from "cui-solid"
import { createSignal, For } from "solid-js";

export default () => {
    const [key, setKey] = createSignal<string>('component');

    const list: any = {
        component: [
            { value: 'select', label: '选择器' },
            { value: 'tabs', label: '标签' },
            { value: 'avatar', label: '头像' },
            { value: 'button', label: '按钮' },
        ],
        design: [
            { value: 'color', label: '颜色' },
            { value: 'dark', label: '暗色模式' },
            { value: 'icon', label: '图标' },
            { value: 'font', label: '字体' },
        ],
        feedback: [
            { value: 'faq', label: '常见问题' },
            { value: 'join', label: '加入用户群' },
            { value: 'hornbill', label: '犀鸟反馈问题' },
        ],
    };

    const tabWrapper = {
        display: 'flex',
        'padding-top': '8px',
        'padding-left': '16px',
        'border-bottom': '0.5px solid var(--cui-color-border)',
    };

    const tabStyle = {
        cursor: 'pointer',
        'margin-right': '12px',
        'padding-bottom': '4px',
    };
    const tabActiveStyle = {
        ...tabStyle,
        'border-bottom': '1px solid var(--cui-color-primary)',
        'font-weight': 700,
    };

    const tabOptions = [
        { itemKey: 'component', label: '组件' },
        { itemKey: 'design', label: '设计' },
        { itemKey: 'feedback', label: '反馈' },
    ];

    return <Space>
        <Select footer={
            <div style={{
                padding: '0 16px',
                'background-color': 'var(--cui-color-fill-0)',
                height: '36px',
                display: 'flex',
                "align-items": 'center',
                cursor: 'pointer'
            }}><Link>查询更多信息</Link></div>
        }>
            <Option value={1} label="北京" />
            <Option value={2} label="上海" />
            <Option value={3} label="杭州" />
            <Option value={4} label="武汉" />
            <Option value={5} label="天津" />
            <Option value={5} label="成都" />
            <Option value={5} label="重庆" />
            <Option value={5} label="乌鲁木齐" />
            <Option value={5} label="台湾" />
        </Select>

        <Select header={
            <div style={tabWrapper}>
                <For each={tabOptions}>
                    {
                        (item) => {
                            const style = () => item.itemKey === key() ? tabActiveStyle : tabStyle;
                            return <div style={style()} onClick={() => setKey(item.itemKey)}>
                                {item.label}
                            </div>
                        }
                    }
                </For>
            </div>
        } data={list[key()]} />
    </Space>
}
