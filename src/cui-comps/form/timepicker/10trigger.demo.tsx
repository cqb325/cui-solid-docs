import { Button, Timepicker } from "cui-solid"
import { createSignal } from "solid-js";
import dayjs from 'dayjs';

export default () => {
    const [time, setTime] = createSignal('');

    return <Timepicker value={[time, setTime]} trigger={() => {
        return <Button type="primary" >
            {time() ? dayjs(time()).format('HH:mm:ss') : '请选择时间'}
        </Button>
    }}/>
}