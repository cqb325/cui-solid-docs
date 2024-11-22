import { Form, FormItem, Input, RadioGroup, useForm } from "cui-solid"

export default () => {
    const form = useForm({
        data: {
            select: 1,
            value: ''
        },
        validation: {
        },
        message: {
            value: {
                required: '请填写信息',
                email: '请填写正确的邮箱地址',
                mobile: '请填写正确的手机号码'
            }
        }
    });

    return <Form form={form}>
        <FormItem name="select" label="选项：">
            <RadioGroup data={[{label: '手机号验证', value: 1}, {label: '邮箱验证', value: 2}]}/>
        </FormItem>
        <FormItem name="value" label="校验值：" rules={form.select === 1 ? {required: true, mobile: true} : {required: true, email: true}}>
            <Input type="text"/>
        </FormItem>
    </Form>
}
