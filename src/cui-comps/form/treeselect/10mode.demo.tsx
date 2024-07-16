import { Space, TreeSelect, TreeCheckMod } from "cui-solid"

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

    const data2 = JSON.parse(JSON.stringify(data));
    const data3 = JSON.parse(JSON.stringify(data));
    const data4 = JSON.parse(JSON.stringify(data));

    return <Space dir="v">
        <Space dir="v">
            <div>CHILD:</div>
            <TreeSelect multi data={data} clearable mode={TreeCheckMod.CHILD} />
            <div>HALF:</div>
            <TreeSelect multi data={data2} clearable mode={TreeCheckMod.HALF} />
            <div>SHALLOW:</div>
            <TreeSelect multi data={data3} clearable mode={TreeCheckMod.SHALLOW} />
            <div>FULL:</div>
            <TreeSelect multi data={data4} clearable mode={TreeCheckMod.FULL} />
        </Space>
    </Space>
}
