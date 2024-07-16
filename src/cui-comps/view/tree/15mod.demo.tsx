import { Space, Tree, TreeCheckMod } from "cui-solid";

export default () => {
    const data1 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ];
    const data2 = JSON.parse(JSON.stringify(data1));
    const data3 = JSON.parse(JSON.stringify(data1));
    const data4 = JSON.parse(JSON.stringify(data1));

    return <Space dir="v">
        <Space>
            <div>HALF</div>
            <div style={{width: '25%'}}>
                <Tree data={data1} checkable mode={TreeCheckMod.FULL} onChange={(v) => {
                    console.log(v);
                }}/>
            </div>
            <div>FULL</div>
            <div style={{width: '25%'}}>
                <Tree data={data2} checkable mode={TreeCheckMod.FULL} onChange={(v) => {
                    console.log(v);
                }}/>
            </div>
        </Space>
        <Space>
            <div>CHILD</div>
            <div style={{width: '25%'}}>
                <Tree data={data3} checkable mode={TreeCheckMod.CHILD} onChange={(v) => {
                    console.log(v);
                }}/>
            </div>
            <div>SHALLOW</div>
            <div style={{width: '25%'}}>
                <Tree data={data4} checkable mode={TreeCheckMod.SHALLOW} onChange={(v) => {
                    console.log(v);
                }}/>
            </div>
        </Space>
    </Space>
}
