import { Icon, Input } from "cui-solid"

export default () => {
    return <Input prepend={<Icon name="user"/>} append={<Icon name="search1"/>}/>
}