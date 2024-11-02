import { Upload } from "cui-solid"
import { FeatherPlus } from "cui-solid-icons/feather";

export default () => {
    const data = {
        field: '1'
    };

    let upload: any;

    const headers = {'x-token': '123456'};

    return <Upload action="https://cqb325.gitee.io/cui-solid-doc/" listType="picture" name="file" data={data} headers={headers} accept=".jpg,.jpeg" ref={upload}
        defaultFileList={[
            {
                name: 'test.png',
                status: 'finished',
                size: 71183,
                preview: true,
                url: 'https://cqb325.gitee.io/cui-solid-doc/logo.svg',
            }
        ]}>
        <FeatherPlus size={20}/>
    </Upload>
}
