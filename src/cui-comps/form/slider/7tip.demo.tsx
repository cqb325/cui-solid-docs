import { Slider } from "cui-solid"

export default () => {
    return <Slider value={[30, 70]} range tipFormatter={(v: number) => {
        return v + '分'
    }}/>
}