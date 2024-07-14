import { Datepicker } from "cui-solid"

export default () => {
    return <Datepicker clearable type="month" onChange={(date: Date) => {
        console.log(date);
    }}/>
}