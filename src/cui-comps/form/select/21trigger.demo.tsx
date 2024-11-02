import { Option, Select } from "cui-solid"
import { F7ChevronDown } from "cui-solid-icons/f7"

export default () => {
    return <Select triggerRender={(value) => {
        return <div style={{
            'min-width': '112px',
            height: '32px',
            display: 'flex',
            'align-items': 'center',
            'padding-left': '8px',
            'border-radius': '3px',
        }}>
            {value || '请选择'}
            <F7ChevronDown />
        </div>
    }} style={{width: '250px'}}>
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
}
