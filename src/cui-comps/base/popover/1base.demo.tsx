import { Popover, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <div>
            <Popover content="over Content">
                <span>OVER</span>
            </Popover>
        </div>
        <div>
            <Popover content="click Content" trigger="click">
                <span>Click</span>
            </Popover>
        </div>
    </Space>
}