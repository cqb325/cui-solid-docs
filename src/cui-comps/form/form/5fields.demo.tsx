import { Button, Checkbox, CheckboxGroup, Col, Form, FormItem, Input, Option, RadioGroup, Row, Space, useForm, Switch as CSwitch, Spinner, Select, Cascader, Timepicker, Datepicker, Slider, TreeSelect, ColorPicker } from "cui-solid"
import dayjs from 'dayjs';

export default () => {
    const form = useForm({
        data: {
            count: 10,
            check: true,
            fruit: [] as string[],
            sex: 1,
            switch: true,
            age: 20,
            city: '1',
            cascader: [] as string[],
            time: '',
            timeRange: [] as string[],
            date: '',
            dateRange: '' as string | string[],
            month: '',
            monthRange: '' as string | Date[],
            dateTime: '' as string | Date,
            dateTimeRange: '' as string | Date[],
            slider: 0,
            tree: [] as string[],
            color: ''
        },
        validation: {
            count: {
                min: 5,
                max: 15,
                required: true,
            },
            city: {
                required: true
            }
        },
        message: {
            count: {
                max: '最大值不能超过15',
                required: '请输入值'
            },
            city: {
                required: '请选择地市'
            }
        }
    });


    const cascaderData = [
        {
            value: 'beijing', title: '北京',
            children: [
                {value: 'gugong', title: '故宫'},
                {value: 'tiantan', title: '天坛'},
                {value: 'wangfujing', title: '王府井'},
            ]
        },
        {
            value: 'jiangsu',
            title: '江苏',
            children: [
                {
                    value: 'nanjing',
                    title: '南京',
                    children: [
                        {
                            value: 'fuzimiao',
                            title: '夫子庙',
                        }
                    ]
                },
                {
                    value: 'suzhou',
                    title: '苏州',
                    children: [
                        {
                            value: 'zhuozhengyuan',
                            title: '拙政园',
                            disabled: true
                        },
                        {
                            value: 'shizilin',
                            title: '狮子林',
                        }
                    ]
                }
            ],
        }];

    const treeData = [];
    for (let i = 0; i < 3; i++) {
        const c = [];
        for (let j = 0; j < 3; j++) {
            c.push({id: `${i + 1}_${j + 1}`, title: `node_${i + 1}_${j + 1}`});
        }
        treeData.push({id: `${i + 1}`, title: `node_${i + 1}`, children: c});
    }

    return <Form form={form} labelWidth={100} onChange={(name: string, v: any) => {
        console.log(name, v);
        console.log(form.getFormData());
    }}>
        <Row>
            <Col grid={0.33}>
                <FormItem label="是否选择:" name="check">
                    <Space dir="h" align="baseline">
                        <Checkbox label="是否选择"/>
                        <Button onClick={() => {
                            form.check = !form.check;
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="水果:" name="fruit">
                    <Space dir="h" align="baseline">
                        <CheckboxGroup data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]}/>
                        <Button onClick={() => {
                            form.fruit = ['2'];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="性别:" name="sex">
                    <Space dir="h" align="baseline">
                        <RadioGroup data={[{label: '男', value: 1}, {label: '女', value: 2}]}/>
                        <Button onClick={() => {
                            form.sex = 2;
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>

        <Row>
            <Col grid={0.33}>
                <FormItem label="开关：" name="switch">
                    <Space dir="h" align="center">
                        <CSwitch />
                        <Button onClick={() => {
                            form.switch = !form.switch;
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="阿萨德：" name="count">
                    <Space dir="h">
                        <Input prefix="￥" suffix="元" />
                        <Button onClick={() => {
                            form.count = form.count + 1;
                            console.log(form.getFormData());
                        }}>Add</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="年龄：" name="age">
                    <Space dir="h" align="center">
                        <Spinner />
                        <Button onClick={() => {
                            form.age = form.age + 1;
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>

        <Row>
            <Col grid={0.33}>
                <FormItem label="地市：" name="city">
                    <Space dir="h" align="center">
                        <Select>
                            <Option label="北京" value="1" />
                            <Option label="上海" value="2" />
                            <Option label="深圳" value="3" />
                        </Select>
                        <Button onClick={() => {
                            form.city = '2';
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="景点：" name="cascader">
                    <Space dir="h" align="center">
                        <Cascader data={cascaderData} />
                        <Button onClick={() => {
                            form.cascader = ['beijing','gugong'];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="时间：" name="time">
                    <Space dir="h" align="center">
                        <Timepicker />
                        <Button onClick={() => {
                            form.time = '10:10:10';
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col grid={0.33}>
                <FormItem label="时间区间：" name="timeRange">
                    <Space dir="h" align="center">
                        <Timepicker type="timeRange"/>
                        <Button onClick={() => {
                            form.timeRange = ['10:10:10', '12:12:00'];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="日期：" name="date">
                    <Space dir="h" align="center">
                        <Datepicker/>
                        <Button onClick={() => {
                            form.date = '2023-04-05';
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="日期范围：" name="dateRange">
                    <Space dir="h" align="center">
                        <Datepicker type="dateRange"/>
                        <Button onClick={() => {
                            form.dateRange = ['2023-04-05', '2023-04-08'];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>

        <Row>
            <Col grid={0.33}>
                <FormItem label="月份：" name="month">
                    <Space dir="h" align="center">
                        <Datepicker type="month"/>
                        <Button onClick={() => {
                            form.month = '2023-04';
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="月份范围：" name="monthRange">
                    <Space dir="h" align="center">
                        <Datepicker type="monthRange"/>
                        <Button onClick={() => {
                            form.monthRange = [dayjs('2023-04').toDate(), dayjs('2023-08').toDate()];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="日期时间：" name="dateTime">
                    <Space dir="h" align="center">
                        <Datepicker type="dateTime"/>
                        <Button onClick={() => {
                            form.dateTime = dayjs('2023-04-05 10:10:10').toDate();
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>

        <Row>
            <Col grid={0.33}>
                <FormItem label="日期时间范围：" name="dateTimeRange">
                    <Space dir="h" align="center">
                        <Datepicker type="dateTimeRange"/>
                        <Button onClick={() => {
                            form.dateTimeRange = [dayjs('2023-04-05 10:10:10').toDate(), dayjs('2023-04-08 12:10:10').toDate()];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="进度：" name="slider">
                    <Space dir="h" align="center">
                        <Slider />
                        <Button onClick={() => {
                            form.slider = 30;
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
            <Col grid={0.33}>
                <FormItem label="地点：" name="tree" labelAlign="start" labelStyle={{'margin-top': '8px'}}>
                    <Space dir="h" align="center">
                        <TreeSelect data={treeData} multi/>
                        <Button onClick={() => {
                            form.tree = ['2_1'];
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col grid={0.33}>
                <FormItem label="颜色：" name="color">
                    <Space dir="h" align="center">
                        <ColorPicker />
                        <Button onClick={() => {
                            form.color = '';
                            console.log(form.getFormData());
                        }}>改变</Button>
                    </Space>
                </FormItem>
            </Col>
        </Row>
        <Space dir="h">
            <Button onClick={() => {
                form.resetFields();
            }}>重置</Button>

            <Button onClick={() => {
                form.isValid();
            }}>校验</Button>
        </Space>
    </Form>
}
