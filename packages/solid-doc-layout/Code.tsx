import { Button, Icon, message, Space, Tooltip, useCopy } from "cui-solid";
import { createSignal } from "solid-js";
import SolidLiveEditor from "solid-live/src/components/SolidLiveEditor";
import { openSandbox } from "./OpenSandbox";

export default function Code(props: any) {
    let wrap: any;
    let editor: any;
    let height: number;
    const [open, setOpen] = createSignal(false);
    const classList = () => ({
        'cm-demo-code-wrap': true,
        'cm-demo-code-wrap-open': open(),
    })

    const onCopy = async () => {
        const ret = await useCopy(props.ts);
        if (ret) {
            message.success({
                content: '复制成功!',
                duration: 2
            });
        }
    }

    const openInSnadbox = () => {
        openSandbox(props.ts, props.title);
    }

    return <Space dir="v" class="cm-demo-code">
        <div ref={wrap}>
            <Space dir="h" justify="end" size={20}>
                <Tooltip content="在CodeSandbox中打开" align="top">
                    <Icon name="codesandbox" size={16} onClick={openInSnadbox} />
                </Tooltip>
                <Tooltip content="拷贝" align="top">
                    <Icon name="copy" size={16} onClick={onCopy} />
                </Tooltip>
                <Tooltip content={open() ? '收起代码' : '显示代码，可实时编辑'} align="top">
                    <Icon name="code" size={16} onClick={() => {
                        setOpen(!open());
                        setTimeout(() => {
                            if (wrap) {
                                const w = wrap.getBoundingClientRect().width;
                                editor.layout({ width: w, height });
                            }
                        })
                    }} />
                </Tooltip>
            </Space>
        </div>
        <Space classList={classList()} dir="v" justify="center">
            {/* <pre>
                <code class="language-js">{props.data}</code>
            </pre> */}
            {
                props.ts ? <SolidLiveEditor code={props.ts} onHeightChange={(pEditor: any, cHeight: number) => {
                    editor = pEditor;
                    height = cHeight;
                }} /> : null
            }
            {/* <Tabs activeName="ts" duration={0}>
                <Tab name="ts" title="Typescript">
                    <div innerHTML={decodeURIComponent(props.ts)}></div>
                </Tab>
                <Tab name="js" title="Javascript">
                    <div innerHTML={decodeURIComponent(props.js)}></div>
                </Tab>
            </Tabs> */}
            <Button type="dashed" onClick={() => setOpen(false)}>收 起 代 码</Button>
        </Space>
    </Space>
}
