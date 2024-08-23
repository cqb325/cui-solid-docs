import { Carousel, Image, Space } from "cui-solid"

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import { For } from "solid-js";

export default () => {
    const arr = [img1, img2, img3, img4, img5];

    return <Space dir="v">
        <Carousel draggable dotColor="red" dotActiveColor="green">
            <For each={arr}>
                {(item) => <Carousel.Item>
                        <div class="demo-carousel">
                            <Image src={item} fit="cover"/>
                        </div>
                    </Carousel.Item>
                }
            </For>
        </Carousel>
    </Space>
}
