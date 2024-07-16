import { Space, Tree, Icon } from "cui-solid";

export default () => {
    const data = [
        {id: 'beijing', title: '北京', icon: <Icon name="box1"/>, children: [
            {id: 'gugong', title: '故宫', icon: <Icon name="file-text"/>},
            {id: 'tiantan', title: '天坛', icon: <Icon name="file-text"/>},
        ]},
        {id: 'zhejiang', title: '浙江', icon: <Icon name="loader"/>, children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ];

    return <Space dir="v">
        <Tree data={data} checkable directory/>
    </Space>
}
