import { Rate } from "cui-solid"
import { FeatherStar } from "cui-solid-icons/feather";

export default () => {
    return <Rate icon={<FeatherStar size={24}/>} onChange={(v: number) => {
        console.log(v);
    }}/>
}
