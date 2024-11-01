import { Button, Space, ButtonGroup } from 'cui-solid';
import { F7AntFill, F7HifispeakerFill, F7Cat } from 'cui-solid-icons/f7';

export default function Demo () {
    return <Space dir="v" align="baseline">
        <Space dir="h">
            <ButtonGroup theme="solid" type="primary">
                <Button>拷贝</Button>
                <Button>复制</Button>
                <Button>粘贴</Button>
            </ButtonGroup>
        </Space>
        <Space dir="h">
            <ButtonGroup theme="light" type="secondary">
                <Button>拷贝</Button>
                <Button>复制</Button>
                <Button>粘贴</Button>
            </ButtonGroup>
        </Space>
        <Space dir="h">
            <ButtonGroup theme="outline" type="tertiary">
                <Button>拷贝</Button>
                <Button>复制</Button>
                <Button>粘贴</Button>
            </ButtonGroup>
        </Space>
        <Space dir="h">
            <ButtonGroup theme="light" type="default">
                <Button>拷贝</Button>
                <Button>复制</Button>
                <Button>粘贴</Button>
            </ButtonGroup>
        </Space>

        <ButtonGroup type="primary" size="small">
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Search</Button>
        </ButtonGroup>
        <ButtonGroup type="primary" size="large">
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Search</Button>
        </ButtonGroup>
        <ButtonGroup type="default">
            <Button icon={<F7AntFill />} />
            <Button icon={<F7Cat />} />
            <Button icon={<F7HifispeakerFill />} />
        </ButtonGroup>
        <ButtonGroup type="default" size="large">
            <Button icon={<F7AntFill/>} />
            <Button icon={<F7Cat/>} />
            <Button icon={<F7HifispeakerFill />} />
        </ButtonGroup>
        <ButtonGroup type="default" disabled>
            <Button icon={<F7AntFill/>} />
            <Button icon={<F7Cat />} />
            <Button icon={<F7HifispeakerFill />} />
        </ButtonGroup>
    </Space>
}
