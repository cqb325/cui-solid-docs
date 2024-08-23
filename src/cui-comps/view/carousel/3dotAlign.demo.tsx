import { Carousel, Image, RadioGroup, Space, Switch as CSwitch } from "cui-solid"

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import { createSignal, For } from "solid-js";

export default () => {
    const [dotAlign, setDotAlign] = createSignal<'left' | 'top' | 'right' | 'bottom' | undefined>('bottom');
    const [dir, setDir] = createSignal<any>('h');
    const [arrow, setArrow] = createSignal<boolean>(false);
    const [dotType, setDotType] = createSignal<any>('dot');

    const arr = [img1, img2, img3, img4, img5];

    return <Space dir="v">
        <Space>
            <RadioGroup stick value={[dotType, setDotType]} data={[{label: 'dot', value: 'dot'}, {label: 'line', value: 'line'}, {label: 'columnar', value: 'columnar'}]} />
        </Space>
        <Space>
            <RadioGroup stick value={[dotAlign, setDotAlign]} data={[{label: 'left', value: 'left'}, {label: 'top', value: 'top'}, {label: 'right', value: 'right'}, {label: 'bottom', value: 'bottom'}]} />
        </Space>
        <Space>
            <RadioGroup stick value={[dir, setDir]} data={[{label: '横向', value: 'h'}, {label: '纵向', value: 'v'}]} />
        </Space>
        <Space>
            <CSwitch checked={[arrow, setArrow]} labels={['show arrow', 'hide arrow']}></CSwitch>
        </Space>
        <Carousel dotAlign={dotAlign()} dir={dir()} dotType={dotType()} draggable arrow={arrow()}>
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
