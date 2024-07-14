import { Datepicker } from "cui-solid"

export default () => {
    return <Datepicker clearable disabledDate={(date: Date) => {
        return date.getTime() > Date.now();
    }}/>
}