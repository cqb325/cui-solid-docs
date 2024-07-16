import { Space, Tree, Button } from "cui-solid";
import genData from '~/routes/view/utils';

export default () => {
    let tree: any;
    const data = genData({treeDepth: 3, nodesPerLevel: 10}).data;

    return <Space dir="v">
        <Tree style={{"max-height": "200px"}} data={data} checkable ref={tree} />
        <Space dir="v">
            <Space>
                <Button type="primary" onClick={() => {
                    tree.scrollTo(data[5].id)
                }}>ScrollTo Top</Button>

                <Button type="primary" onClick={() => {
                    tree.scrollTo(data[5].id, 'center')
                }}>ScrollTo Center</Button>

                <Button type="primary" onClick={() => {
                    tree.scrollTo(data[5].id, 'bottom')
                }}>ScrollTo Bottom</Button>
            </Space>
        </Space>
    </Space>
}
