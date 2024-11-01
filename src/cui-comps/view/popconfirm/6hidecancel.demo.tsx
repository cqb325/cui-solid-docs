import { Link, Popconfirm } from "cui-solid"
import { FeatherHelpCircle } from "cui-solid-icons/feather"

export default () => {
    return <Popconfirm showCancel={false} icon={<FeatherHelpCircle color="var(--cui-color-error)"/>}
        arrow align="topLeft"
        title="Are you sure?" content="content content content">
        <Link>隐藏取消按钮</Link>
    </Popconfirm>
}
