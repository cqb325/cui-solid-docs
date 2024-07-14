import { QRCode, Space } from "cui-solid";

export default () => {
    return <Space dir="h" wrap>
        <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="L"/>
        <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="M"/>
        <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="Q"/>
        <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="H"/>
    </Space>
}