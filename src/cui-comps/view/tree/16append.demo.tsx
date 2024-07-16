import { Space, Tree, Button } from "cui-solid";

export default () => {
    let tree: any;
    const data = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]}
    ];

    return <Space dir="v">
        <Tree data={data} checkable ref={tree} />
            <Space dir="v">
                <Space>
                    <Button type="primary" onClick={() => {
                        tree?.append('beijing', {
                            id: `id_${Math.random()}`,
                            title: 'appendNode',
                        })
                    }}>Append</Button>

                    <Button type="primary" onClick={() => {
                        tree?.prepend('beijing', {
                            id: `id_${Math.random()}`,
                            title: 'prependNode',
                        })
                    }}>Prepend</Button>
                </Space>

                <Space>
                    <Button type="primary" onClick={() => {
                        tree?.insertBefore('beijing', {
                            id: `id_${Math.random()}`,
                            title: 'insertBeforeNode',
                        })
                    }}>InsertBefore</Button>

                    <Button type="primary" onClick={() => {
                        tree?.insertAfter('beijing', {
                            id: `id_${Math.random()}`,
                            title: 'InsertAfterNode',
                        })
                    }}>InsertAfter</Button>
                </Space>
            </Space>
    </Space>
}
