import { Space, Input, InputGroup, Select, Option, Datepicker, Button, Spinner } from "cui-solid"
import { FeatherCopy } from "cui-solid-icons/feather"

export default () => {
    return <Space dir="v">
        <InputGroup compact>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="选型1" />
            </Select>
            <Input />
        </InputGroup>
        <InputGroup compact>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="选型1" />
            </Select>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="选型1" />
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
        <InputGroup compact>
            <Input style={{"width": "150px"}}/>
            <Spinner />
        </InputGroup>
        <InputGroup compact>
            <Select style={{"width": "100px"}}>
                <Option value={1} label="选型1" />
            </Select>
            <Input style={{"width": "150px"}}/>
            <Button type="primary">搜索</Button>
        </InputGroup>

        <InputGroup compact>
            <Datepicker style={{"width": "120px"}}/>
            <Input style={{"width": "150px"}}/>
            <Button theme="outline" icon={<FeatherCopy color="#999"/>} />
        </InputGroup>
    </Space>
}
