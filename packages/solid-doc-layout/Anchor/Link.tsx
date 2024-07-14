import { onCleanup, onMount } from "solid-js";
import { useAnchorContext } from "."
import { useClassList } from "../components/utils/useProps"

export const AnchorLink = (props: any) => {
    const ctx: any = useAnchorContext();

    const classList = () => useClassList(props, 'sd-anchor-link', {
        'sd-anchor-link-active': ctx?.activeKey() === props.id, // 添加active类名
        [`sd-anchor-link-depth${props.depth}`]: true // 添加active类名
    })

    const onClick = () => {
        ctx?.onClick(props);
    }

    onMount(() => {
        ctx?.addAnchor(props.id);
    })

    onCleanup(() => {
        ctx?.removeAnchor(props.id);
    })
    return <div classList={classList()} data-link={props.id} onClick={onClick}>
        {props.title}
    </div>
}
