import { RadioGroup, Space, Text, Link } from "cui-solid"
import { FeatherLink } from "cui-solid-icons/feather";
import { createSignal } from "solid-js";

export default () => {
    const [size, setSize] = createSignal('default');

    return <Space dir="v" inline>
        <Text>Text</Text>
        <Text type="primary">Primary</Text>
        <Text type="secondary">Secondary</Text>
        <Text type="warning">Warning</Text>
        <Text type="error">Error</Text>
        <Text type="success">Success</Text>
        <Text type="success" disabled>Disabled</Text>
        <Text mark disabled>Default Mark</Text>
        <Text type="error" mark>Error Mark</Text>
        <Text code>let i = 0;</Text>
        <Text underline>Underline</Text>
        <Text deleted>Deleted</Text>
        <Text strong>Strong</Text>
        <Text link="http://www.baidu.com">链接</Text>
        <Link icon={<FeatherLink />}>Link</Link>
        <Link icon={<FeatherLink />} strong gradient={['45deg', '#9B59B6', '#3498DB']}>Link Gradient</Link>
        <Text icon={<FeatherLink />} strong underline link="http://www.baidu.com">链接</Text>
        <Text size="small">Small</Text>
        <Text size={size()}>Normal</Text>
        <Text size="large">Large</Text>
        <Text size="large" strong gradient={['45deg', '#9B59B6', '#3498DB']}>Gradient Color</Text>
        <RadioGroup stick value={[size, setSize]} data={[{label: 'Small', value: 'small'}, {label: 'Default', value: ''}, {label: 'Large', value: 'large'}]}
            onChange={(v: string) => {
                setSize(v);
            }} />
    </Space>
}
