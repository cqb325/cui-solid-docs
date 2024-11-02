import { Link, Popconfirm } from "cui-solid"
import { FeatherHelpCircle } from "cui-solid-icons/feather"

export default () => {
    return <Popconfirm disabled icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
        title="Are you sure?" content="content content content">
        <Link>禁用</Link>
    </Popconfirm>
}
