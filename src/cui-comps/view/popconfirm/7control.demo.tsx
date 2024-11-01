import { Button, Popconfirm } from "cui-solid"
import { FeatherHelpCircle } from "cui-solid-icons/feather"
import { createSignal } from "solid-js"

export default () => {
    const [visible, setVisible] = createSignal(false);
    return <>
        <Popconfirm visible={[visible, setVisible]} icon={<FeatherHelpCircle color="var(--cui-color-error)"/>}
            arrow align="topLeft" onOk={async () => {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(true);
                        setVisible(false);
                    }, 2000);
                })
            }}
            title="Are you sure?" content="content content content">
            <></>
        </Popconfirm>
        <Button onClick={() => {
            setVisible(true);
        }
        }>控制</Button>
    </>
}
