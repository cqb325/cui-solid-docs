import { Space, Button, RadioGroup, Switch as CSwitch } from "cui-solid";
import type {ButtonProps} from 'cui-solid'
import { createSignal } from "solid-js";

export default function Demo() {
    const [theme, setTheme] = createSignal<ButtonProps['theme']>('solid');
    const [disabled, setDisabled] = createSignal<boolean>(true);

    return <Space dir="v" size={24} inline align="baseline">
        <RadioGroup stick value={[theme, setTheme]} data={[{value: 'solid', label: 'Solid'}, {value: 'light', label: 'light'},
            {value: 'borderless', label: 'borderless'}, {value: 'outline', label: 'outline'},
            {value: 'dashed', label: 'dashed'}
        ]}/>
        <Space>禁用: <CSwitch checked={[disabled, setDisabled]} /></Space>
        <Space dir="h">
            <Button theme={theme()} disabled={disabled()} type="primary">Primary</Button>
            <Button theme={theme()} disabled={disabled()} type="secondary">Secondary</Button>
            <Button theme={theme()} disabled={disabled()} type="tertiary">Tertiary</Button>
            <Button theme={theme()} disabled={disabled()} type="success">Success</Button>
        </Space>
        <Space dir="h">
            <Button theme={theme()} disabled={disabled()} type="error">Error</Button>
            <Button theme={theme()} disabled={disabled()} type="danger">Danger</Button>
            <Button theme={theme()} disabled={disabled()} type="warning">Warning</Button>
            <Button theme={theme()} disabled={disabled()} type="default">Default</Button>
        </Space>
    </Space>
}
