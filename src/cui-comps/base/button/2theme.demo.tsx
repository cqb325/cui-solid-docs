import { Button, RadioGroup, Space } from 'cui-solid';
import type {ButtonProps} from 'cui-solid'
import { createSignal } from 'solid-js';

export default function Demo () {
    const [theme, setTheme] = createSignal<ButtonProps['theme']>('solid');

    return <Space dir="v" size={24} inline align="baseline">
        <RadioGroup stick value={[theme, setTheme]} data={[{value: 'solid', label: 'solid'}, {value: 'light', label: 'light'},
            {value: 'borderless', label: 'borderless'}, {value: 'outline', label: 'outline'},
            {value: 'dashed', label: 'dashed'}
        ]}/>
        <Space dir="h">
            <Button theme={theme()} type="primary">Primary</Button>
            <Button theme={theme()} type="secondary">Secondary</Button>
            <Button theme={theme()} type="tertiary">Tertiary</Button>
            <Button theme={theme()} type="success">Success</Button>
        </Space>
        <Space dir="h">
            <Button theme={theme()} type="error">Error</Button>
            <Button theme={theme()} type="danger">Danger</Button>
            <Button theme={theme()} type="warning">Warning</Button>
            <Button theme={theme()} type="default">Default</Button>
        </Space>
    </Space>
}
