import { Space, Spinner } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Spinner min={10} max={20}/>
    </Space>
}