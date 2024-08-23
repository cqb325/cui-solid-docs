import { Carousel, Image, RadioGroup, Space } from "cui-solid"

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import { createSignal, For, Match, Switch } from "solid-js";

export default () => {
    const [effect, setEffect] = createSignal("slide");

    const arr = [img1, img2, img3, img4, img5];

    return <Space dir="v">
        <Space>
            <RadioGroup stick value={[effect, setEffect]} data={[{label: 'slide', value: 'slide'}, {label: 'fade', value: 'fade'}, {label: 'card', value: 'card'}]} />
        </Space>
        <Switch>
            <Match when={effect() === 'slide'}>
                <Carousel effect={effect()} draggable>
                    <For each={arr}>
                        {(item) => <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={item} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        }
                    </For>
                </Carousel>
            </Match>

            <Match when={effect() === 'fade'}>
                <Carousel effect={effect()} draggable key='fade'>
                    <For each={arr}>
                        {(item) => <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={item} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        }
                    </For>
                </Carousel>
            </Match>

            <Match when={effect() === 'card'}>
                <Carousel effect={effect()} draggable key='card'>
                    <For each={arr}>
                        {(item) => <Carousel.Item>
                                <div class="demo-carousel">
                                    <Image src={item} fit="cover"/>
                                </div>
                            </Carousel.Item>
                        }
                    </For>
                </Carousel>
            </Match>
        </Switch>
    </Space>
}
