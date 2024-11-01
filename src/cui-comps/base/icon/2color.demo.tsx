import { Space } from 'cui-solid';
import { FeatherBox, FeatherThumbsUp, FeatherLoader } from 'cui-solid-icons/feather';

export default () => {
    return <Space dir="h" align="center">
        <FeatherBox color="#52c41a"/>
        <FeatherLoader color="#ff4d4f"/>
        <FeatherThumbsUp color="#1890ff"/>
    </Space>
}
