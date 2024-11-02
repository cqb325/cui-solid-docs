import { TeleportBox } from "cui-solid"

export default () => {
    const data = [
        {value: 'A', label: '类别A', children: [
            {value: 'A1', label: 'A-1'},
            {value: 'A2', label: 'A-2'}
        ]},
        {value: 'B', label: '类别B', children: [
            {value: 'B1', label: 'B-1', checked: true, disabled: true},
            {value: 'B2', label: 'B-2'}
        ]},
        {value: 'C', label: '类别C', children: [
            {value: 'C1', label: 'C-1'},
            {value: 'C2', label: 'C-2'}
        ]}
    ]

    return <TeleportBox disabled data={data} style={{width: '500px'}} defaultValue={['B1']}/>
}
