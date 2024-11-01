import { Space } from 'cui-solid';
import { FeatherLoader, FeatherSettings } from 'cui-solid-icons/feather';

export default () => {
    return <Space dir="h">
        <div>
            <FeatherSettings spin/>
            <FeatherLoader spin/>
        </div>
    </Space>
}
