export interface UploadProps {
    multiple?: boolean;
    webkitdirectory?: boolean;
    accept?: string;
    classList?: any;
    class?: string;
    style?: any;
    disabled?: boolean;
    children?: any;
    beforeUpload?: (file: File) => Promise<File> | boolean;
    format?: string[];
    maxSize?: number;
    name?: string;
    headers?: any;
    withCredentials?: boolean;
    data?: any;
    action?: string;
    onProgress?: (e: any, file: any, fileList: any[]) => void;
    onSuccess?: (res: any, file: any, fileList: any[]) => void;
    onError?: (error: any, res: any, file: any) => void;
    onRemove?: (file: any, fileList: any[]) => void;
    onPreview?: (file: any, fileList?: any[]) => void;
    onFormatError?: (file: any, fileList: any[]) => void;
    onExceededSize?: (file: any, fileList: any[]) => void;
    onClear?: (fileList: any[]) => void;
    defaultFileList?: any[];
    type?: 'select' | 'drag';
    paste?: boolean;
    asFormField?: boolean;
    getFileUrl?: (res: any, file: any) => void;
    ref?: any;
    listType?: 'picture';
    customRequest?: (option: any) => void;
}
export declare function Upload(props: UploadProps): import("solid-js").JSX.Element;
