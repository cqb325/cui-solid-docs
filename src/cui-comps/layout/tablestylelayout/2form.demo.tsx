import { Form, FormItem, Input, useForm, TableStyleLayout, TableStyleLayoutRow, TableStyleLayoutLabel, TableStyleLayoutValue } from "cui-solid"


export default () => {
    interface UserData {
        userName: string,
        department: string
    }

    const form = useForm<UserData>({
        data: {
            userName: '',
            department: ''
        },
        validation: {
            userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            department: [
                { required: true, message: '请输入部门', trigger: 'blur' }
            ],
        },
        message: {
        }
    });

    return <Form form={form} errorTransfer errorAlign="bottomLeft">
        <TableStyleLayout labelWidth={100}>
            <TableStyleLayoutRow>
                <TableStyleLayoutLabel required>用户名</TableStyleLayoutLabel>
                <TableStyleLayoutValue>
                    <FormItem name="userName">
                        <Input placeholder="用户名"/>
                    </FormItem>
                </TableStyleLayoutValue>
                <TableStyleLayoutLabel required>部门</TableStyleLayoutLabel>
                <TableStyleLayoutValue>
                    <FormItem name="department">
                        <Input placeholder="用户名"/>
                    </FormItem>
                </TableStyleLayoutValue>
                <TableStyleLayoutLabel>联系方式</TableStyleLayoutLabel>
                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
            </TableStyleLayoutRow>
        </TableStyleLayout>
    </Form>
}
