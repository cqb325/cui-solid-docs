import { TeleportBox } from "cui-solid"

export default () => {
    const data: any[] = new Array(30).fill(0).map((_, index) => ({value: index, label: `列表选项${index}`}))
    data[3].disabled = true;

    return <TeleportBox data={data} style={{width: '500px'}} defaultValue={[3]}/>
}
