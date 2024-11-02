import { Avatar, BothSide, InnerCheckbox, Space, TeleportBox } from "cui-solid"
import { createSignal } from "solid-js"
import type { TeleportBoxItem } from "cui-solid"
import { FeatherX } from "cui-solid-icons/feather"

export default () => {
    const data = [
        {value: '1', label: '赵乾', email: 'zhaoqian@example.com'},
        {value: '2', label: '钱坤', email: 'wangquan@example.com'},
        {value: '3', label: '孙权', email: 'sunwei@example.com'},
        {value: '4', label: '李白', email: 'lisi@example.com'},
        {value: '5', label: '周瑜', email: 'zhoushuai@example.com'},
        {value: '6', label: '吴刚', email: 'wujiang@example.com'},
        {value: '7', label: '诸葛亮', email: 'zhuge@example.com'},
        {value: '8', label: '曹操', email: 'caocao@example.com'},
        {value: '9', label: '刘备', email: 'liubei@example.com'}
    ]

    const [value, setValue] = createSignal<any[]>([])

    const renderSourceItem = (item: TeleportBoxItem, onChange: (v: boolean) => void) => {
        return <Space>
            <InnerCheckbox checked={item.checked} disabled={item.disabled} onChange={(checked) => onChange(checked)}
                label={
                    <Space align="center" style={{height: '46px'}}>
                        <Avatar style={{'background-color': 'var(--cui-theme-color-gold)'}}>{(item.label as string).substring(0, 1)}</Avatar>
                        <Space dir="v" size={0} style={{'min-width': 0, 'line-height': '18px'}}>
                            <span style={{'font-size': '13px'}}>{item.label}</span>
                            <span style={{'font-size': '12px', color: '#999'}}>{item.email}</span>
                        </Space>
                    </Space>
                }/>
        </Space>
    }

    const renderSelectedItem = (item: TeleportBoxItem, onRemove: () => void) => {
        return <BothSide class="cm-teleprt-custom-select-item">
            <Space align="center" style={{height: '46px'}}>
                <Avatar style={{'background-color': 'var(--cui-theme-color-gold)'}}>{(item.label as string).substring(0, 1)}</Avatar>
                <Space dir="v" size={0} style={{'min-width': 0, 'line-height': '18px'}}>
                    <span style={{'font-size': '13px'}}>{item.label}</span>
                    <span style={{'font-size': '12px', color: '#999'}}>{item.email}</span>
                </Space>
            </Space>
            <FeatherX onClick={() => onRemove()} />
        </BothSide>
    }

    const customFilter = (item: TeleportBoxItem, keyword: string) => {
        return item.label.includes(keyword) || item.email.includes(keyword)
    }

    return <TeleportBox data={data} value={[value, setValue]}
        defaultValue={['1', '3']}
        filter={customFilter}
        renderSourceItem={renderSourceItem}
        renderSelectedItem={renderSelectedItem}
        style={{width: '500px'}}/>
}
