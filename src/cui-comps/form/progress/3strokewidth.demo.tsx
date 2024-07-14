import { Progress, Space } from "cui-solid";

export default () => {
    return <Space dir="v">
        <Progress value={70} strokeWidth={5}/>
        <Progress value={70} textInside strokeWidth={16} status="active"/>
    </Space>
}