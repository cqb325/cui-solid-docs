import { Paragraph, Tooltip } from "cui-solid"

export default () => {
    return <Tooltip disabled content={<div>
        <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
    </div>}>
        <span>show tips</span>
    </Tooltip>
}