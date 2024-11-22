import { Form, FormItem, useForm, Input, Space, Button, Table, Link } from "cui-solid"
import { FeatherPlus } from "cui-solid-icons/feather";
import { For } from "solid-js";
import type { Accessor } from "solid-js";

export default () => {
    const form = useForm({
        data: {
            rows: [
                { name: '', age: ''}
            ]
        }
    })

    return <Space dir="v" size={30}>
        <Form form={form} errorTransfer onChange={(name, v) => {
            console.log(name, v, form);
        }}>
            <Table border columns={[
                {name: 'name', title: 'Name', render: (v: any, col: any, row: any, index: number) => {
                    return <FormItem name={`rows.${index}.name`} style={{'margin-bottom': 0}}
                        rules={[{ required: true, message: 'Name不能为空'}]}>
                        <Input/>
                    </FormItem>
                }},
                {name: 'age', title: 'Age', render: (v: any, col: any, row: any, index: number) => {
                    return <FormItem name={`rows.${index}.age`} style={{'margin-bottom': 0}}
                    rules={[{ required: true, message: 'Age不能为空'}]}>
                        <Input/>
                    </FormItem>
                }},
                {name: '_op', title: '操作', render: (v: any, col: any, row: any, index: number) => {
                    return <Space>
                        <Link onClick={() => {
                            if (form.rows.length >= 5) return;
                            form.rows.push({
                                name: '',
                                age: ''
                            });
                        }}>新增</Link>
                        {
                            index === 0 ? null : <Link onClick={() => {
                                if (form.rows.length <= 1) return;
                                form.rows.splice(index, 1);
                            }}>删除</Link>
                        }
                    </Space>
                }}
            ]} data={form.rows}/>
        </Form>
        <Space>
            <Button type="primary" onClick={async () => {
                await form.validate()
            }}>提交</Button>
        </Space>
    </Space>
}
