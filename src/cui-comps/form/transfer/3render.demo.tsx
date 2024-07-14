import { BothSide, Transfer } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const data = [];
    for (let i = 0; i < 15; i++) {
        const disabled = Math.random() < 0.4 ? true : false;
        const obj = {
            id: i,
            disabled,
            title: 'Content_'+ i
        };
        data.push(obj)
    }
    const [value, setValue] = createSignal([2,5,7])

    return <Transfer width={250} height={300} data={data} value={[value, setValue]} render={(item: any) => {
        return <BothSide><span>{item.id}</span><span>{item.title}</span></BothSide>
    }}/>
}