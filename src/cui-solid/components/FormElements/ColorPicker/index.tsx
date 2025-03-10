import { Show, createEffect, createSignal } from "solid-js";
import { Dropdown } from "../../Dropdown";
import { useClassList } from "../../utils/useProps"
import { Value } from "./Value";
import { Saturation } from "./Saturation";
import createField from "../../utils/createField";
import { changeColor, toRGBAString } from "./utils";
import { Hue } from "./Hue";
import { Space } from "../../Layout";
import { Input } from "../Input";
import { Button } from "../../Button";
import { Alpha } from "./Alpha";
import { Recommend } from "./Recommend";

interface ColorPickerProps {
    name?: string
    value?: any
    style?: any
    classList?: any
    class?: string
    transfer?: boolean
    inline?: boolean
    align?: 'bottomLeft'|'bottomRight'
    disabled?: boolean
    alpha?: boolean
    size?: 'small'|'large'
    recommend?: boolean
    colors?: string[]
    asFormField?: boolean
    onChange?(v: string): void
}

export function ColorPicker (props: ColorPickerProps) {
    const [open, setOpen] = createSignal(false);
    const align = props.align ?? 'bottomLeft';
    const [value, setValue] = createField(props, '');
    const [val, setVal] = createSignal(changeColor(value() || '#2D8CF0'));
    const [confirmVal, setConfirmVal] = createSignal('');

    let oldHue: any = val();
    const classList = () => useClassList(props, 'cm-color-picker', {
        [`cm-color-picker-${props.size}`]: props.size,
    });
    const inlineClassList = () => useClassList(props, 'cm-color-picker-wrap', {
        'cm-color-picker-inline': props.inline
    });

    const onColorChange = (data: any) => {
        colorChange(data);
    }

    const onColorChange2 = (data: any) => {
        oldHue = val().hsl.h;
        setValue(changeColor(data, oldHue));
    }

    const colorChange = (data: any, _oldHue?: any) => {
        oldHue = val().hsl.h;
        setVal(changeColor(data, _oldHue || oldHue));
    }

    const onConfirm = () => {
        setOpen(false);
        setValue(confirmVal());
        props.onChange && props.onChange(confirmVal());
    }

    const onClear = () => {
        setOpen(false);
        setValue('');
        props.onChange && props.onChange('');
    }

    createEffect(() => {
        if (props.alpha) {
            setConfirmVal(toRGBAString(val().rgba));
        } else {
            setConfirmVal(val().hex);
        }
    })

    const onConfirmChange = (v: string) => {
        const color = changeColor(v);
        setVal(color);
    }

    const renderMain = () => {
        return <Space dir="v">
            <Saturation value={val()} onChange={onColorChange}/>
            <Hue value={val()} onChange={onColorChange}/>
            <Show when={props.alpha}>
                <Alpha value={val()} onChange={onColorChange}/>
            </Show>
            <Show when={props.recommend}>
                <Recommend colors={props.colors} onChange={onColorChange}/>
            </Show>
            <div class="cm-color-picker-confirm">
                <Space dir="h">
                    <Input size="small" class="cm-color-picker-input" value={[confirmVal, setConfirmVal]} onChange={onConfirmChange}/>
                    <Button size="small" type="default" onClick={onClear}>清除</Button>
                    <Button size="small" type="primary" onClick={onConfirm}>确定</Button>
                </Space>
            </div>
        </Space>
    }

    return <Show when={props.inline} fallback={
        <div classList={classList()} style={props.style}>
            <Dropdown transfer={props.transfer} align={align} disabled={props.disabled} trigger="click" visible={[open, setOpen]}
                menu={<div class="cm-color-picker-wrap">
                    {renderMain()}
                </div>}>
                <Value disabled={props.disabled} size={props.size} currentValue={val()} value={value()} open={open()}/>
            </Dropdown>
        </div>
        }>
        <div classList={inlineClassList()}>
            {renderMain()}
        </div>
    </Show>
}
