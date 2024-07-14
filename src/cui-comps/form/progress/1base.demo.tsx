import { Progress, Space } from "cui-solid";

export default () => {
    return <Space dir="v">
        <Progress value={30} />
        <Progress value={50} status="active"/>
        <Progress value={70} status="error"/>
        <Progress value={100} />
    </Space>
}