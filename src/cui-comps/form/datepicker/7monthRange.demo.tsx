import { Datepicker } from "cui-solid"

export default () => {
    return <Datepicker clearable type="monthRange" onChange={(dates: Date[]) => {
        console.log(dates);
    }}/>
}