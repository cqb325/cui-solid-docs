import { Timeline } from "cui-solid";
import { F7Tree } from "cui-solid-icons/f7";

export default () => {
    return <Timeline>
        <Timeline.Item color="green" icon={<F7Tree size={13}/>}>发布1.0版本</Timeline.Item>
        <Timeline.Item color="green">发布2.0版本</Timeline.Item>
        <Timeline.Item color="red">严重故障</Timeline.Item>
        <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
    </Timeline>
}
