import { Slider, Space, TagGroup } from "cui-solid"
import { createSignal } from "solid-js"

export default () => {
    const [width, setWidth] = createSignal(40);
    return <Space dir="v">
        <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px', width: `${width()}%`}}>
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
            ]} closable max="auto" />
        </div>
        <Slider value={[width, setWidth]}/>
    </Space>
}
