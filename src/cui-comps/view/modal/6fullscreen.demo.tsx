import { Button, Modal } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);
    const [fullScreen, setFullScreen] = createSignal(false);

    return <>
        <Button type="primary" onClick={() => {
            setVisible(true);
        }}>打开</Button>
        <Modal title="提示" resetPostion visible={[visible, setVisible]} fullScreen={fullScreen()}>
            <div><Button onClick={() => {
                setFullScreen(!fullScreen());
            }}>全屏</Button></div>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
        </Modal>
    </>
}