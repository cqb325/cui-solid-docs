import { Link, Popconfirm } from "cui-solid"
import { FeatherHelpCircle } from "cui-solid-icons/feather"

export default () => {
    return <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
        title="Are you sure?" content="content content content" okType="error">
        <Link>按钮类型</Link>
    </Popconfirm>
}
