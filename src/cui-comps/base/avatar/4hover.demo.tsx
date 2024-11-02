import { Avatar, Space } from "cui-solid"
import { FeatherSettings, FeatherCamera } from "cui-solid-icons/feather";

export default () => {
    return <Space dir="h" align="center">
        <Avatar size={48} icon={<FeatherSettings size={24}/>} style={{'background-color': 'rgb(242 168 113)', color: 'rgb(245, 106, 0)'}}
            hoverMask={<div style={{
                'background-color': 'var(--cui-color-overlay-bg)',
                height: '100%',
                width: '100%',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
            }}><FeatherCamera /></div>} />
    </Space>
}
