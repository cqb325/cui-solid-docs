import { Button, Icon, Upload } from "cui-solid"

export default () => {
    return <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file"
        onProgress={(e: any, file: any, fileList: any[]) => {
            console.log(file);
        }} onSuccess={() => {
            console.log('success');
        }} onError={(e: any) => {
            console.log(e);
        }}>
        <Button icon={<Icon name="upload"/>} type="primary">Upload Files</Button>
    </Upload>
}