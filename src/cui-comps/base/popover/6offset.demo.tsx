import { Button, Popover, Space } from "cui-solid"

export default () => {
    return <Popover title="Title" align="top" arrow offset={8} content={
        <div>
            <p>popver content</p>
            <p>popver content</p>
        </div>
    }>
        <Button type="primary">Offset 8px</Button>
    </Popover>
}
