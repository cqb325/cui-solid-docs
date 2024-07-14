import { Switch as CSwitch, modal, Space } from "cui-solid"

export default () => {
    return <Space dir="h">
        <CSwitch onBeforeChange={(checked: boolean) => {
            return new Promise((resolve) => {
                modal.info({
                    title: '提示',
                    content: '确认进行切换？',
                    onOk: () => {
                        resolve(true);
                    }
                })
            })
        }}/>
    </Space>
}