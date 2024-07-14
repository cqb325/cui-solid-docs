import { Input, WordCount } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [value, setValue] = createSignal('');

    return <>
        <Input type="textarea" trigger="input" value={[value, setValue]}/>
        <WordCount total={10} value={value()} circle/>
    </>
}