import { Paragraph, Tooltip } from "cui-solid"

export default () => {
    return <Tooltip content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
        <Paragraph style={{color: '#fff'}}>自定义多行内容</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
}