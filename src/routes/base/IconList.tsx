import { createEffect, createSignal, For } from 'solid-js';
// @ts-expect-error: 2732
import data from "./icons.json";
import { Input } from '~/cui-solid/components/FormElements/Input';
import { Space } from '~/cui-solid/components/Layout/Space';
import { Row } from '~/cui-solid/components/Row';
import { Col } from '~/cui-solid/components/Col';
import { Icon } from '~/cui-solid/components/Icon';
import { Text } from '~/cui-solid/components/Typography/Text';

export default () => {
    const [keyword, setKeyword] = createSignal('');
    const [showData, setShowData] = createSignal(data);
    createEffect(() => {
        const newData = data.filter((item: any) => {
            return (item.name.indexOf(keyword()) > -1)
        });
        setShowData(newData);
    });

    return <Space dir="v" id="icon_search">
        <Input value={[keyword, setKeyword]} trigger="input" placeholder="搜索Icon" />
        <Row gutter={20} class="cm-icons-row">
            <For each={showData()}>{(item: any) => {
                return <Col grid={0.25}><Icon name={item.name} /><Text>{item.name}</Text></Col>
            }}</For>
        </Row>
    </Space>
}
