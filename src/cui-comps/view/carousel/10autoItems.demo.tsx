import { Carousel, Image } from "cui-solid"

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';

export default () => {
    return <Carousel itemsPerView='auto' draggable gutter={20}>
        <Carousel.Item style={{width: '60%'}}>
            <div class="demo-carousel">
                <Image src={img1} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item style={{width: '40%'}}>
            <div class="demo-carousel">
                <Image src={img2} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item style={{width: '30%'}}>
            <div class="demo-carousel">
                <Image src={img3} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item style={{width: '20%'}}>
            <div class="demo-carousel">
                <Image src={img4} fit="cover"/>
            </div>
        </Carousel.Item>
        <Carousel.Item style={{width: '10%'}}>
            <div class="demo-carousel">
                <Image src={img5} fit="cover"/>
            </div>
        </Carousel.Item>
    </Carousel>
}
