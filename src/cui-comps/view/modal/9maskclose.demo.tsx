import { Button, Modal } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <>
        <Button type="primary" onClick={() => {
            setVisible(true);
        }}>打开</Button>
        <Modal title="提示" maskClosable={false} visible={[visible, setVisible]}>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
        </Modal>
    </>
}