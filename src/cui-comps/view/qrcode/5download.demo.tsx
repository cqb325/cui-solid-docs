import { Button, QRCode } from "cui-solid";

export default () => {
    let qrcode: any;
    return <>
        <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" ref={qrcode}/>
        <Button type="primary" onClick={() => {
            qrcode.download();
        }}>下载</Button>
    </>
}