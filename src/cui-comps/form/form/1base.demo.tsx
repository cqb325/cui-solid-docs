import { Form, FormItem, Input, useForm } from "cui-solid"

export default () => {
    interface FormData {
        u: string
        p: string
    }

    const form = useForm<FormData>({
        data: {
            u: '',
            p: ''
        },
        validation: {
        },
        message: {
        }
    });

    return <Form form={form} inline>
        <FormItem name="u" label="用户名：">
            <Input type="text"/>
        </FormItem>
        <FormItem name="p" label="密码：">
            <Input type="password"/>
        </FormItem>
    </Form>
}