import { Button, Upload } from "cui-solid"
import { F7CloudUploadFill } from "cui-solid-icons/f7";

export default () => {
    return <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" accept="jpg"
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
        <Button icon={<F7CloudUploadFill/>} type="primary">Upload Files</Button>
    </Upload>
}
