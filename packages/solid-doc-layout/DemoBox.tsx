import { Card, Divider, Text, Paragraph } from "~/cui-solid/components";
import { ClientOnly } from "./ClientOnly";
import SolidLive from "solid-live";
import SolidLivePreview from "solid-live/src/components/SolidLivePreview";
import Code from "./Code";

export function DemoBox(props: any) {
    // const SolidLive = clientOnly(() => import("solid-live"));
    // const SolidLivePreview = clientOnly(() => import("solid-live/src/components/SolidLivePreview"));
    // const Code = clientOnly(() => import("./Code"));
    // onMount(() => {
    // })
    return <div id={props.id}>
        <ClientOnly>
            <SolidLive formatter={window.formatter} id={props.id} scopes={props.scopes}>
                <Card bordered>
                    <SolidLivePreview />
                    <Divider align="left"><Text type="primary">{props.title}</Text></Divider>
                    <Paragraph type="secondary" spacing="extended">
                        {props.children}
                    </Paragraph>
                    <Code ts={props.code} title={props.title} />
                </Card>
            </SolidLive>
        </ClientOnly>
    </div>
}
