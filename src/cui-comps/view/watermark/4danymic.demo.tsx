import { Watermark, Space, useForm, Form, FormItem, Input, Slider, Spinner, Image, Paragraph } from "cui-solid"
import { createStore } from "solid-js/store"

export default () => {
    interface FormData {
        content: string
        fontSize: number
        zIndex: number
        rotate: number
        gap1: number
        gap2: number
        offset1: number
        offset2: number
    }

    const form = useForm<FormData>({
        data: {
            content: 'CUI-Solid',
            fontSize: 16,
            zIndex: 9,
            rotate: -22,
            gap1: 100,
            gap2: 100,
            offset1: 0,
            offset2: 0,
        }
    })

    const [store, setStore] = createStore({
        content: form.content,
        zIndex: form.zIndex,
        fontSize: form.fontSize,
        rotate: form.rotate,
        gap: [form.gap1, form.gap2],
        offset: [form.offset1, form.offset2]
    });

    const onFormChange = (name: any, val: any) => {
        if (name === 'gap1') {
            setStore('gap', 0, val);
        }
        if (name === 'gap2') {
            setStore('gap', 1, val);
        }
        if (name === 'offset1') {
            setStore('offset', 0, val);
        }
        if (name === 'offset2') {
            setStore('offset', 1, val);
        }
        setStore(name, val);
    }

    return <Space>
        <div style={{flex: 1}}>
            <Watermark content={store.content} font={{fontSize: store.fontSize}} zIndex={store.zIndex} rotate={store.rotate} gap={store.gap} offset={store.offset}>
                <Paragraph>
                    The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design.
                </Paragraph>
                <Paragraph>
                    Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience.
                </Paragraph>
                <Paragraph>
                    Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural.
                </Paragraph>
                <Image src='https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ'/>
            </Watermark>
        </div>
        <div style={{width: '400px', padding: '10px'}}>
            <Form form={form} onChange={onFormChange}>
                <FormItem name="content" label="内容">
                    <Input />
                </FormItem>
                <FormItem name="fontSize" label="FontSize">
                    <Slider min={0} max={100}/>
                </FormItem>
                <FormItem name="zIndex" label="zIndex">
                    <Slider min={0} max={100}/>
                </FormItem>
                <FormItem name="rotate" label="Rotate">
                    <Slider min={-180} max={180}/>
                </FormItem>
                <Space>
                    <FormItem name="gap1" label="Gap">
                        <Spinner min={0} />
                    </FormItem>
                    <FormItem name="gap2">
                        <Spinner min={0} />
                    </FormItem>
                </Space>
                <Space>
                    <FormItem name="offset1" label="Offset">
                        <Spinner min={-10000} />
                    </FormItem>
                    <FormItem name="offset2">
                        <Spinner min={-10000} />
                    </FormItem>
                </Space>
            </Form>
        </div>
    </Space>
}
