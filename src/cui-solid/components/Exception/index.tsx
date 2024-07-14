import { Match, Show, Switch } from "solid-js";
import { Image } from "../Image";
import { typeImages } from "./typeImages";
import { useClassList } from "../utils/useProps"
import { Text } from "../Typography/Text";
import { Button } from "../Button";

type ExceptionProps = {
    classList?: any,
    class?: string,
    type?: '404'|'403'|'500'|'empty'|'fail'|'deny',
    typeImage?: any,
    desc?: string,
    showDesc?: boolean,
    link?: string,
    showAction?: boolean,
}
export function Exception (props: ExceptionProps) {
    const classList = () => useClassList(props, 'cm-exception', {
        [`cm-exception-${props.type}`]: !!props.type
    });
    const showDesc = props.showDesc ?? true;
    const showAction = props.showAction ?? true;

    return <div classList={classList()}>
        <div class="cm-exception-img">
            <Show when={props.typeImage} fallback={
                <Image src={typeImages(props.type)} />
            }>
                <Image src={props.typeImage} />
            </Show>
        </div>
        <div class="cm-exception-info">
            <Show when={showDesc}>
                <div class="cm-exception-desc">
                    <Switch>
                        <Match when={props.type === '403'}>
                            {/* <Title heading={2}>403</Title> */}
                            <Text size="large">{props.desc ?? '抱歉，你无权访问该页面'}</Text>
                        </Match>
                        <Match when={props.type === '404'}>
                            {/* <Title heading={2}>404</Title> */}
                            <Text size="large">{props.desc ?? '抱歉，你访问的页面不存在'}</Text>
                        </Match>
                        <Match when={props.type === '500'}>
                            {/* <Title heading={2}>500</Title> */}
                            <Text size="large">{props.desc ?? '抱歉，服务器出错了'}</Text>
                        </Match>
                        <Match when={props.type === 'empty'}>
                            <Text size="large">{props.desc ?? '暂无数据'}</Text>
                        </Match>
                        <Match when={props.type === 'fail'}>
                            <Text size="large">{props.desc ?? '授权失败'}</Text>
                        </Match>
                        <Match when={props.type === 'deny'}>
                            <Text size="large">{props.desc ?? '拒绝访问'}</Text>
                        </Match>
                    </Switch>
                </div>
            </Show>
            <Show when={showAction}>
                <div class="cm-exception-action">
                    <Button link={props.link} type="primary">返回首页</Button>
                </div>
            </Show>
        </div>
    </div>
}
