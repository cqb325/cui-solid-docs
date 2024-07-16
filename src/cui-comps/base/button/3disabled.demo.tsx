import { Space, Button } from "cui-solid";

export default function Demo() {
    return <Space dir="h">
        <Button type="primary" disabled>PRIMARY</Button>
        <Button disabled>Default</Button>
        <Button type="primary" ghost disabled>Ghost</Button>
        <Button type="link" disabled>Link</Button>
        <Button type="text" disabled>Text</Button>
        <Button type="dashed" disabled>Dashed</Button>
        <Button type="primary" disabled danger>Danger</Button>
    </Space>
}
