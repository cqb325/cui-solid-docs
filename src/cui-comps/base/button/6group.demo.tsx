import { Button, Space, Icon, ButtonGroup } from 'cui-solid';

export default function Demo () {
    return <Space dir="v">
        <ButtonGroup type="primary">
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Search</Button>
        </ButtonGroup>
        <ButtonGroup type="default">
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Search</Button>
        </ButtonGroup>
        <ButtonGroup type="default">
            <Button icon={<Icon name="home"/>} />
            <Button icon={<Icon name="user"/>} />
            <Button icon={<Icon name="search1"/>} />
        </ButtonGroup>
        <ButtonGroup type="default" size="large">
            <Button icon={<Icon name="home"/>} />
            <Button icon={<Icon name="user"/>} />
            <Button icon={<Icon name="search1"/>} />
        </ButtonGroup>
        <ButtonGroup type="default" disabled>
            <Button icon={<Icon name="home"/>} />
            <Button icon={<Icon name="user"/>} />
            <Button icon={<Icon name="search1"/>} />
        </ButtonGroup>
    </Space>
}