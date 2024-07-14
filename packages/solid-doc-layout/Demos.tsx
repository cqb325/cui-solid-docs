import { Accessor, createEffect, createSignal, For, onCleanup, onMount } from "solid-js";
import { store, clearDemos } from "./store";
import { Row } from "./components/Row";
import { DemoBox } from "./DemoBox";
import { Col } from "./components/Col";
import { Space } from "./components/Layout";

export function Demos (props: any) {
    let wrap: any;
    clearDemos();
    const initColumns = props.columns ?? 1;
    const [data, setData] = createSignal([]);
    const [columns, setColumns] = createSignal<Date[]>(initColumns === 1 ? [new Date()] : [new Date(), new Date()]);

    const onWrapEntry = (entry: ResizeObserverEntry) => {
        const { width } = entry.contentRect;
        const all = store.list.length;
        if (all < 2) {
            if (columns().length !== 1) {
                setColumns([new Date()])
            }
            return;
        }
        if (width < 875 && columns().length === 2) {
            setColumns([new Date()])
        } else if (width >= 875 && columns().length === 1) {
            setColumns([new Date(), new Date()])
        }
    }

    onMount(() => {
        // if (ResizeObserver) {
        //     const ro = initColumns !== 1 ? new ResizeObserver((entries: ResizeObserverEntry[]) => {
        //         entries.forEach((entry: ResizeObserverEntry) => onWrapEntry(entry));
        //     }) : null;
        //     ro?.observe(wrap);

        //     onCleanup(() => {
        //         ro?.unobserve(wrap);
        //     })
        // }
    })

    createEffect(() => {
        console.log(store.list.length);
        setData(store.list);
    })

    return <div ref={wrap}>
        <Row gutter={24}>
            {
                <For each={columns()}>
                    {(item: any, colIndex: Accessor<number>) => {
                        const length = columns().length;
                        const colNum = colIndex();

                        return <Col grid={1/length} style={{position: 'static'}}>
                            <Space dir="v">
                                <For each={data()}>
                                    {(item: any, index: Accessor<number>) => {
                                        return index() % length === colNum ? <DemoBox {...item} /> : null
                                    }}
                                </For>
                            </Space>
                        </Col>
                    }}
                </For>
            }
        </Row>
    </div>
}
