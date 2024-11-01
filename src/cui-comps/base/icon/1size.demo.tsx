import { Space } from 'cui-solid';
import { FeatherBox, FeatherThumbsUp, FeatherLoader } from 'cui-solid-icons/feather';

export default () => {
    return <Space dir="h" align="center">
        <FeatherBox />
        <FeatherLoader size={16}/>
        <FeatherThumbsUp size={24}/>
    </Space>
}
