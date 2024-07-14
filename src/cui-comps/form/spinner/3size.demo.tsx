import { Space, Spinner } from "cui-solid"

export default () => {
    return <Space dir="h">
        <Spinner size="large"/>
        <Spinner />
        <Spinner size="small"/>
    </Space>
}