import { Tooltip } from "cui-solid"

export default () => {
    return <Tooltip content={<div>Tip Content</div>}>
        <span>mouse over show tips</span>
    </Tooltip>
}