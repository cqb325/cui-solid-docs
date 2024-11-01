import { Space, Tree } from "cui-solid";
import { FeatherBox, FeatherFileText, FeatherLoader } from "cui-solid-icons/feather";

export default () => {
    const data = [
        {id: 'beijing', title: '北京', icon: <FeatherBox />, children: [
            {id: 'gugong', title: '故宫', icon: <FeatherFileText />},
            {id: 'tiantan', title: '天坛', icon: <FeatherFileText />},
        ]},
        {id: 'zhejiang', title: '浙江', icon: <FeatherLoader />, children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ];

    return <Space dir="v">
        <Tree data={data} checkable directory/>
    </Space>
}
