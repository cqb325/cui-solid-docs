import { Button, Icon, Upload } from "cui-solid"

export default () => {
    const data = {
        field: '1'
    };

    const headers = {'x-token': '123456'};

    let upload: any;

    return <>
        <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" data={data} headers={headers} accept="jpg" ref={upload}
            defaultFileList={[
                {
                    name: 'test.png',
                    status: 'finished',
                    size: 71183,
                    preview: true,
                    url: 'https://cqb325.gitee.io/cui-solid-doc/logo.svg',
                }
            ]}
            onProgress={(e: any, file: any, fileList: any[]) => {
                console.log(file);
            }} onSuccess={() => {
                console.log('success');
            }} onError={(e: any) => {
                console.log(e);
            }}>
            <Button icon={<Icon name="upload"/>} type="primary">Upload Files</Button>
        </Upload>

        <Button type="primary" onClick={() => {
            console.log(upload.getFileList());
        }}>获取文件列表</Button>
    </>
}