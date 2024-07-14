import { Button, Form, FormItem, Input, Modal, useForm } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [addModal, setAddModal] = createSignal(false);

    interface FormData {
        value: string
    }

    const form = useForm<FormData>({
        data: {
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

    return <>
        <Modal title="新增" visible={[addModal, setAddModal]}>
            <Form form={form} errorTransfer errorAlign="right">
                <FormItem name="value" label="校验值：" rules={{required: true, mobile: true}}>
                    <Input type="text"/>
                </FormItem>
            </Form>
        </Modal>
        <Button type="primary" onClick={() => {
            setAddModal(true);
        }}>打开</Button>
    </>
}