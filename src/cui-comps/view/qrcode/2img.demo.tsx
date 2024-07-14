import { QRCode } from "cui-solid";
import img from '/src/assets/images/logo.svg';

export default () => {
    return <QRCode icon={img} value="https://www.baidu.com" />
}