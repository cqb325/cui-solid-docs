import { For } from "solid-js";
import { Anchor, AnchorLink } from "./Anchor";

export function SDAnchor(props: any) {
    const anchorData = props.data;

    return <div class="sys-ctx-main-right">
        <div class="sys-anchor" style={{ position: 'sticky', top: '64px', "font-size": '12px', padding: '16px', "border-radius": '4px' }}>
            <Anchor title='页面导航'>
                <For each={anchorData}>
                    {(item: any) => {
                        return <AnchorLink {...item} />
                    }}
                </For>
            </Anchor>
        </div>
    </div>
}
