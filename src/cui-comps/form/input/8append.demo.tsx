import { Input } from "cui-solid"
import { FeatherSearch, FeatherUser } from "cui-solid-icons/feather"

export default () => {
    return <Input prepend={<FeatherUser />} append={<FeatherSearch/>}/>
}
