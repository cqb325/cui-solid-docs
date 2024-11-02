import { Avatar, BothSide, Option, Select, Space } from "cui-solid"

export default () => {

    return <Select clearable renderOption={(item: any) => {
        return <BothSide>
            <Space align="center">{item.avatar}{item.label}</Space>
            <div>{item.value}</div>
        </BothSide>
    }} renderSelectedItem={(item?: any) => {
        return item ? <Space align="center">{item.avatar}{item.label}</Space> : '';
    }}>
        <Option value={1} label="北京" avatar={<Avatar size={24} style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>北</Avatar>}/>
        <Option value={2} label="上海" avatar={<Avatar size={24} style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>上</Avatar>}/>
        <Option value={3} label="杭州" avatar={<Avatar size={24} style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>杭</Avatar>}/>
        <Option value={4} label="武汉" avatar={<Avatar size={24} style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>武</Avatar>}/>
        <Option value={5} label="天津" avatar={<Avatar size={24} style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>天</Avatar>}/>
    </Select>
}
