import { clientOnly } from "@solidjs/start";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";
import { Text } from "./components/Typography/Text";
import { Paragraph } from "./components/Typography/Paragraph";
const SolidLive = clientOnly(() => import("solid-live"));
const SolidLivePreview = clientOnly(() => import("solid-live/src/components/SolidLivePreview"));
const Code = clientOnly(() => import("./Code"));

export function DemoBox(props: any) {
    return <div id={props.id}>
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
    </div>
}
