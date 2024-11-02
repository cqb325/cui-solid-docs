import { Upload } from "cui-solid"
import { F7CloudUploadFill } from "cui-solid-icons/f7";

export default () => {
    const data = {
        field: '1'
    };

    const headers = {'x-token': '123456'};

    return <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" type="drag" data={data} headers={headers} accept="jpg">
        <div class="cm-upload-drag-wrap">
            <F7CloudUploadFill size={32}/>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
}
