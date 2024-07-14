import { Input, QRCode, Space } from "cui-solid";
import { createSignal } from "solid-js";

export default () => {
    const [src, setSrc] = createSignal('https://www.baidu.com');

    return <Space dir="v" inline>
        <div>
            <QRCode value={src()} />
        </div>
        <Input value={[src, setSrc]} />
    </Space>
}