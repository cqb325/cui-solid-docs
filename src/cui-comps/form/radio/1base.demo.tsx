import { Radio } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [sex, setSex] = createSignal(false);

    return <Radio name="sex" value="1" label="男" checked={[sex, setSex]}/>
}