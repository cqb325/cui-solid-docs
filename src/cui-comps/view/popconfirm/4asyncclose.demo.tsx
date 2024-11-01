import { Link, Popconfirm } from "cui-solid"
import { FeatherHelpCircle } from "cui-solid-icons/feather"

export default () => {
    return <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
        title="Are you sure?" content="content content content" onOk={async () => {
            return await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            })
        }}>
        <Link>异步关闭</Link>
    </Popconfirm>
}
