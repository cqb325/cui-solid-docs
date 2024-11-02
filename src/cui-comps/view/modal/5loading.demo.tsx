import { Button, Modal, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);
    const [visible2, setVisible2] = createSignal(false);
    return <>
        <Space>
            <Button type="primary" onClick={() => {
                setVisible(true);
            }}>打开</Button>

            <Button type="primary" onClick={() => {
                setVisible2(true);
            }}>阻止关闭</Button>
        </Space>
        <Modal title="提示" visible={[visible, setVisible]} loading onOk={() => {
            console.log('click ok');
            setTimeout(() => {
                setVisible(false);
            }, 2000);
        }}>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
        </Modal>

        <Modal title="提示" visible={[visible2, setVisible2]} loading onOk={async () => {
            console.log('click ok');
            return await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(false);
                }, 2000);
            })
        }}>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
            <div>modal 内容</div>
        </Modal>
    </>
}
