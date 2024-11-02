import { Button, Popover, Space } from "cui-solid"

export default () => {
    return <Space dir="v" size={24}>
        <div>
            <Popover title="Title" content="hover Content">
                <Button>Hover me</Button>
            </Popover>
        </div>
        <div>
            <Popover title="Title" content="click Content" trigger="click">
                <Button>Click me</Button>
            </Popover>
        </div>
        <div>
            <Popover content="focus Content" trigger="focus" title="Title">
                <Button>Focus me</Button>
            </Popover>
        </div>
    </Space>
}
