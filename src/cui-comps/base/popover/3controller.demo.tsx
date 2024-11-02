import { Button, Popover, Space, Text } from "cui-solid"
import { createSignal } from "solid-js";
import { F7QuestionCircleFill } from "cui-solid-icons/f7";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <Space dir="v" size={24}>
        <div>
            <Popover visible={[visible, setVisible]} theme="light" title="Title" content={<div>
                <div>content!content!content!</div>
                <div>content!content!content!</div>
                <div>content!content!content!</div>
                <div>content!content!content!</div>
                <Button theme="borderless" size="small" onClick={() => {
                    setVisible(false);
                }}>Close</Button>
            </div>} arrow trigger="click">
                <Button>Click me</Button>
            </Popover>

            <div>
                <Popover theme="light" align="topLeft" title={<Space align="center"><F7QuestionCircleFill size={16} color="var(--cui-color-warning)"/> <Text>确认用户信息</Text></Space>}
                        content={<Space dir="v" style={{width: '150px'}}>
                        <div>是否确认删除该信息</div>
                    </Space>} arrow confirm onOk={() => {
                    console.log(1);
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(false);
                        }, 2000)
                    });
                }}>
                    <Button type="primary">删除选项?</Button>
                </Popover>
            </div>
        </div>
    </Space>
}
