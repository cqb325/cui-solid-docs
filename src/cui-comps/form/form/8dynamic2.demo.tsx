import { Form, FormItem, useForm, Input, Space, Button } from "cui-solid"
import { FeatherPlus } from "cui-solid-icons/feather";
import { For } from "solid-js";
import type { Accessor } from "solid-js";

export default () => {
    const form = useForm({
        data: {
            alerts: [{
                name: '',
                rule: ''
            }]
        }
    })

    return <Space dir="v" size={30}>
        <Form form={form} onChange={(name, v) => {
            console.log(name, v, form);
        }}>
            <For each={form.alerts}>
                {(item, index: Accessor<number>) => {
                    return <Space>
                        <FormItem name={`alerts.${index()}.name`} label="告警名称：" rules={[{ required: true, message: '告警名称不能为空'}]}>
                            <Input />
                        </FormItem>
                        <FormItem name={`alerts.${index()}.rule`} label="告警规则：" rules={[{ required: true, message: '告警规则不能为空'}]}>
                            <Input />
                        </FormItem>
                    </Space>
                }}
            </For>
        </Form>
        <Space dir="v" inline>
            <Button icon={<FeatherPlus/>} onClick={() => {
                form.alerts.push({name: '', rule: ''}); // 动态显示告警
            }}/>
            <Space>
                <Button type="primary" onClick={async () => {
                    await form.validate()
                }}>提交</Button>
            </Space>
        </Space>
    </Space>
}
