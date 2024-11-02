import { TreeSelect } from "cui-solid"
import { FeatherTag } from "cui-solid-icons/feather"

export default () => {
    const data = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    return <TreeSelect prepend={<FeatherTag/>} data={data} clearable/>
}
