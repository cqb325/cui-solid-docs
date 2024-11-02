import { Form, FormItem, Option, useForm, Select, Input, Space, createField } from "cui-solid"
import { createEffect, createSignal } from "solid-js";

export default () => {
    interface FormModel {
        alarmConfig: string;
    }

    interface FormModel2 {
        alarmConfig: string;
        alarmPeriod: string;
        alarmTime: string;
    }

    const form = useForm<FormModel>({
        data: {
            alarmConfig: '',
        },
        validation: {
            alarmConfig: [{
                required: true, message: '请填写告警配置信息',
            }]
        },
        message: {
        }
    });

    const form2 = useForm<FormModel2>({
        data: {
            alarmConfig: '',
            alarmPeriod: '',
            alarmTime: ''
        },
        validation: {
            alarmConfig: [{
                required: true, message: '请填写告警配置信息',
            }]
        },
        message: {
        }
    });

    const CustomField = (props: any) => {
        // 绑定到form中
        const [value, setValue] = createField<string>(props, 'value', '');
        const [period, setPeriod] = createSignal('')
        const [time, setTime] = createSignal('')

        createEffect(() => {
            const val = value();
            let [p, t] = ['', ''];
            if (val) {
                [p, t] = val.split('-');
            }
            setPeriod(p);
            setTime(t);
        })

        const onChange = () => {
            const val = period() && time() ? [period(), time()].join('-') : '';
            // 触发值的改变
            setValue(val);
        }

        return <Space>
            <Select value={[period, setPeriod]} onChange={onChange} data={[{ label: '每日', value: '1' }, { label: '每周', value: '2' }]} style={{width: '100px'}} clearable/>
            <Input type="text" value={[time, setTime]} onChange={onChange}/>
        </Space>
    }


    return <Space dir="v" size={30}>
        <Form form={form} labelWidth={100} style={{width: '400px'}}>
            <FormItem label="告警配置" name="alarmConfig">
                <CustomField />
            </FormItem>
        </Form>

        <Form form={form2} labelWidth={100} onChange={(name: string, v: any) => {
            if (form2.alarmPeriod && form2.alarmTime) {
                form2.alarmConfig = `${form2.alarmPeriod}-${form2.alarmTime}`
            } else {
                form2.alarmConfig = ''
            }
        }} style={{width: '400px'}}>
            <FormItem label="告警配置" name="alarmConfig">
                <Space>
                    <Select name="alarmPeriod" style={{width: '100px'}} clearable>
                        <Option value="1" label="每日"></Option>
                        <Option value="2" label="每三日"></Option>
                        <Option value="3" label="每周"></Option>
                    </Select>
                    <Input asFormField name="alarmTime" clearable/>
                </Space>
            </FormItem>
        </Form>
    </Space>
}
