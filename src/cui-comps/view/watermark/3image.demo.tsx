import { Watermark } from "cui-solid"
import img from './img.png';

export default () => {
    return <Watermark content="" image={img} width={114} height={32}>
        <div style={{width: '100%', height: '400px'}} />
    </Watermark>
}
