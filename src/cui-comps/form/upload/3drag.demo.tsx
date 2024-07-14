import { Icon, Upload } from "cui-solid"

export default () => {
    const data = {
        field: '1'
    };

    const headers = {'x-token': '123456'};

    return <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" type="drag" data={data} headers={headers} accept="jpg">
        <div class="cm-upload-drag-wrap">
            <Icon name="upload" size={32}/>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
}