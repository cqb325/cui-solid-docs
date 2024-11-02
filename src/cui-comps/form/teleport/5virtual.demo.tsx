import { TeleportBox } from "cui-solid"

export default () => {
    const data: any[] = new Array(300).fill(0).map((_, index) => ({value: index, label: `列表选项${index}`}))

    return <TeleportBox data={data} virtual style={{width: '500px'}}/>
}
