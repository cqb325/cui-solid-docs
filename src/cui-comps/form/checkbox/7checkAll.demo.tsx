import { Checkbox, CheckboxGroup, Divider } from "cui-solid"
import { createEffect, createSignal } from "solid-js";

export default () => {
    const [checked, setChecked] = createSignal<boolean | 'indeterminate'>(false);
    const [checkedList, setCheckedList] = createSignal(['1', '2']);

    const data = [{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '柚子', value: '3'}];

    const onCheckChange = (checked: boolean) => {
        if (checked) {
            setCheckedList(data.map(item => item.value));
        } else {
            setCheckedList([]);
        }
    }

    createEffect(() => {
        const list = checkedList();
        if (list.length === data.length) {
            setChecked(true);
        } else if (list.length === 0) {
            setChecked(false);
        } else {
            setChecked('indeterminate');
        }
    })

    return <>
        <div>
            <Checkbox checked={[checked, setChecked]} onChange={onCheckChange} label="全选"/>
        </div>
        <Divider />
        <CheckboxGroup value={[checkedList, setCheckedList]} data={data} />
    </>
}
