import { Button, CountUp, Space } from "cui-solid"

export default () => {
    let countup: any;

    return <Space dir="v">
        <CountUp value={2000} style={{"font-size": "32px"}} ref={countup} duration={4} decimal={2}/>
        <Space dir="h">
            <Button onClick={() => {
                countup.reset();
                countup.start();
            }}>重新开始</Button>
        </Space>
    </Space>
}