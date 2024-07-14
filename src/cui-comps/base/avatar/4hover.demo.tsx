import { Avatar, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="h" align="center">
        <Avatar size={48} icon={<Icon name="settings" size={24}/>} style={{'background-color': 'rgb(242 168 113)', color: 'rgb(245, 106, 0)'}}
            hoverMask={<div style={{
                'background-color': 'var(--cui-color-overlay-bg)',
                height: '100%',
                width: '100%',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
            }}><Icon name="camera"/></div>} />
    </Space>
}