import { Button, notice } from "cui-solid";

export default () => {
    return <Button onClick={() => {
        notice.info({
            title: '提示',
            content: '提示内容',
        });
    }}>消息</Button>
}