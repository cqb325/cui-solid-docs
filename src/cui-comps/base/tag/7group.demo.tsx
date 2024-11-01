import { Space, TagGroup, Text } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Space dir="v" align="baseline">
            <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                <TagGroup data={[
                    {id: '1', title: '标签一'},
                    {id: '2', title: '标签二'},
                ]}/>
            </div>
            <Text>showMore</Text>
            <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                <TagGroup data={[
                    {id: '1', title: '标签一'},
                    {id: '2', title: '标签二'},
                    {id: '3', title: '标签三'},
                    {id: '4', title: '标签四'},
                ]} closable max={2} showMore />
            </div>
            <Text>tooltipTrigger</Text>
            <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                <TagGroup data={[
                    {id: '1', title: '标签一'},
                    {id: '2', title: '标签二'},
                    {id: '3', title: '标签三'},
                    {id: '4', title: '标签四'},
                ]} closable max={2} showMore tooltipTrigger="click"/>
            </div>
            <Text>tooltipStyle</Text>
            <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                <TagGroup data={[
                    {id: '1', title: '标签一'},
                    {id: '2', title: '标签二'},
                    {id: '3', title: '标签三'},
                    {id: '4', title: '标签四'},
                    {id: '5', title: '标签五'},
                    {id: '6', title: '标签六'},
                    {id: '7', title: '标签七'},
                    {id: '8', title: '标签八'},
                    {id: '9', title: '标签九'},
                ]} closable max={2} showMore tooltipStyle={{'max-width': '200px'}}/>
            </div>
            <Text>tooltipStyle</Text>
            <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                <TagGroup data={[
                    {id: '1', title: '标签一'},
                    {id: '2', title: '标签二'},
                    {id: '3', title: '标签三'},
                    {id: '4', title: '标签四'},
                    {id: '5', title: '标签五'},
                    {id: '6', title: '标签六'},
                    {id: '7', title: '标签七'},
                    {id: '8', title: '标签八'},
                    {id: '9', title: '标签九'},
                ]} closable max={2} showMore tooltipStyle={{'max-width': '200px'}} moreCloseable/>
            </div>
        </Space>
    </Space>
}
