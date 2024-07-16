import { Space, Input, InputGroup, Select, Option, Datepicker, Button } from "cui-solid"

export default () => {
    return <Space dir="v">
        <InputGroup compact>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="啊实打" />
            </Select>
            <Input />
        </InputGroup>
        <InputGroup compact>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="啊实打" />
            </Select>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="啊实打22" />
            </Select>
        </InputGroup>
        <InputGroup compact>
            <Input style={{"width": "100px"}}/>
            <Datepicker style={{"width": "130px"}}/>
        </InputGroup>
        <InputGroup compact>
            <Input style={{"width": "150px"}}/>
            <Button type="primary">搜索</Button>
        </InputGroup>
    </Space>
}
