import { createContext, createEffect, createSignal, onCleanup, onMount, useContext } from 'solid-js';
import './style.less'
import { isServer } from 'solid-js/web';
import { scrollTop } from '~/cui-solid/components/utils/utils';

const AnchorContext = createContext();

export const Anchor = (props: any) => {
    let wrap: any;
    let marker: any;
    const [activeKey, setActiveKey] = createSignal('');
    let isClickScrolling = false;

    const onClick = (item: any) => {
        setActiveKey(item.id);
    }

    const anchorOffsets: any = {};
    let anchors: any = [];

    createEffect(() => {
        const targetKey = activeKey();
        if (!isServer && targetKey) {
            isClickScrolling = true;
            const el = document.querySelector('#' + targetKey) as HTMLElement;
            const lastActive = document.querySelector('.active_demo');
            if (lastActive) {
                lastActive.classList.remove("active_demo");
            }
            if (el) {
                el.classList.add("active_demo");
            }
            const h = document.documentElement.clientHeight;
            const from = document.documentElement.scrollTop;
            const to = el.offsetTop;
            scrollTop(document.documentElement, from, to - h / 2, 500, () => {
                isClickScrolling = false;
            });

            activeAnchorMarker(targetKey);
        }
    })

    const activeAnchorMarker = (targetKey: string) => {
        const anchorItem = document.querySelector('.sd-anchor-link[data-link=' + targetKey + ']');
        const rect = anchorItem?.getBoundingClientRect();
        const wrapRect = wrap?.getBoundingClientRect();
        if (rect) {
            const top = rect.top + (32 - 18) / 2;
            const offset = rect.top - wrapRect.top
            if (offset < 5) {
                wrap.classList.add('sd-anchor-hide');
            } else {
                wrap.classList.remove('sd-anchor-hide');
            }
            marker.style.top = `${top - wrapRect.top}px`;
        }
    }

    const onScroll = (e: any) => {
        if (isClickScrolling) {
            return;
        }
        const scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < anchors.length - 1; i++) {
            const anchor = anchors[i];
            if (anchor.offset - 50 < scrollTop && anchors[i + 1].offset > scrollTop) {
                activeAnchorMarker(anchor.id);
            }
        }
    }

    onMount(() => {
        if (isServer) return;
        document.addEventListener('scroll', onScroll)
        const ro = new ResizeObserver((entries) => {
            entries.forEach(() => {
                getAnchorOffsets();
            })
        });
        ro.observe(document.documentElement);

        onCleanup(() => {
            document.removeEventListener('scroll', onScroll)
            ro.unobserve(document.documentElement);
        });
    })

    const getAnchorOffsets = () => {
        for (let id in anchorOffsets) {
            const targetAnchor: any = document.querySelector(`#${id}`);
            if (targetAnchor) {
                anchorOffsets[id] = targetAnchor.offsetTop;
            }
        }
        anchors = [];
        for (let id in anchorOffsets) {
            if (anchorOffsets[id] !== undefined) {
                anchors.push({ id, offset: anchorOffsets[id] });
            }
        }
        anchors.sort((a: any, b: any) => a.offset - b.offset);
    }

    const addAnchor = (id: string) => {
        anchorOffsets[id] = 0;
        getAnchorOffsets();
    }

    const removeAnchor = (id: string) => {
        delete anchorOffsets[id];
        getAnchorOffsets();
    }

    return <AnchorContext.Provider value={{ onClick, activeKey, addAnchor, removeAnchor }}>
        <aside class='sd-anchor' ref={wrap}>
            <div class='sd-anchor-title'>{props.title}</div>
            <div class='sd-anchor-marker' ref={marker}></div>
            {props.children}
        </aside>
    </AnchorContext.Provider>
}

export const useAnchorContext = () => useContext(AnchorContext);

export * from './Link';
