import { QRCode, Space } from "cui-solid";

export default () => {
    return <Space dir="h">
        <QRCode value="https://www.baidu.com" color="rgb(37,119,47)"/>
        <QRCode value="https://www.baidu.com" color="#1890ff" bgColor="#ededed"/>
    </Space>
}