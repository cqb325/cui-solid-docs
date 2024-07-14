import { Progress, Space } from "cui-solid";

export default () => {
    return <Space dir="v">
        <Progress value={70} textInside strokeWidth={16}/>
        <Progress value={70} textInside strokeWidth={16} status="active"/>
        <Progress value={100} textInside strokeWidth={16}/>
    </Space>
}