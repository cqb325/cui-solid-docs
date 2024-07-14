import { Icon, Rate } from "cui-solid"

export default () => {
    return <Rate icon={<Icon name="star" size={24}/>} onChange={(v: number) => {
        console.log(v);
    }}/>
}