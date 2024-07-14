import { Input, WordCount } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal('');

    return <>
        <Input type="textarea" trigger="input" value={[value, setValue]}/>
        <WordCount total={10} value={value()} overflow prefix={'已输入'} prefixOverflow={'已超出'} suffixOverflow={'个字'} suffix={'个字'}/>
    </>
}