import { Image, SideBySide } from "cui-solid";
import img1 from './clarity2.webp';
import img2 from './clarity2_after_ai.webp';

export default () => {
    return <div style={{width: '640px', height: '426px'}}>
        <SideBySide left={<div style={{background: 'green'}}>
            <Image src={img1}/>
        </div>}
        right={<div style={{background: 'red'}}>
            <Image src={img2}/>
        </div>}/>
    </div>
}