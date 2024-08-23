import { Carousel, Image, RadioGroup, Space } from "cui-solid"

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import { createSignal } from "solid-js";

export default () => {
    const [dotType, setDotType] = createSignal<any>('dot');

    return <Space dir="v">
        <Space>
            <RadioGroup stick value={[dotType, setDotType]} data={[{label: 'dot', value: 'dot'}, {label: 'line', value: 'line'}, {label: 'columnar', value: 'columnar'}]} />
        </Space>
        <Carousel dotType={dotType()}>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img5} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Space>
}
