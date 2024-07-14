import { Timepicker } from "cui-solid"

export default () => {
    return <Timepicker disabledTime={(num: number, type: string) => {
        if ((type === 'minute' || type === 'second') && num % 3 === 0) {
            return true;
        }
        return false;
    }}/>
}