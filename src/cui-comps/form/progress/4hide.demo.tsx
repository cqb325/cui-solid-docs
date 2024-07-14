import { Progress, Space } from "cui-solid";

export default () => {
    return <Space dir="v">
        <Progress value={70} hidePercent/>
    </Space>
}