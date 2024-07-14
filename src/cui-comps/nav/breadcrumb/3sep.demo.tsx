import { Breadcrumb } from "cui-solid"

export default () => {
    return <Breadcrumb separator=">">
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>面板</Breadcrumb.Item>
        <Breadcrumb.Item>管理</Breadcrumb.Item>
    </Breadcrumb>
}