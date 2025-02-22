import { splitProps } from "solid-js";
import { useClassList, useStyle } from "../utils/useProps";
import type { ParagraphProps } from "./paragraph.d";


export function Link (props: ParagraphProps) {
    const [local, others] = splitProps(props, ['classList', 'class', 'children', 'type', 'disabled', 'link', 'icon',
    'mark', 'code', 'underline', 'deleted', 'strong', 'size', 'onCopy', 'gradient']);
    const size = () => local.size || 'normal';
    const classList = () => useClassList(props, 'cm-text cm-text-link', {
        [`cm-text-${local.type}`]: local.type,
        'cm-text-disabled': local.disabled,
        'cm-text-underline': local.underline,
        'cm-text-deleted': local.deleted,
        'cm-text-strong': local.strong,
        [`cm-text-${size()}`]: size(),
    });
    const style = () => useStyle(props, {
        'background-image': local.gradient ? `linear-gradient(${local.gradient.join(',')})` : '',
        '-webkit-text-fill-color': props.gradient ? 'transparent' : ''
    })
    return <span classList={classList()}><a {...others} style={style()} href={local.link}>{local.icon}{local.children}</a></span>
}
