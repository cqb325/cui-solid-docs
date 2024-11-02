import { Breadcrumb } from "cui-solid"
import { F7House, F7LogoApple } from "cui-solid-icons/f7"

export default () => {
    return <Breadcrumb>
        <Breadcrumb.Item icon={<F7House />}>首页</Breadcrumb.Item>
        <Breadcrumb.Item icon={<F7LogoApple />} link="#/nav/breadcrumb">面板</Breadcrumb.Item>
        <Breadcrumb.Item>管理</Breadcrumb.Item>
    </Breadcrumb>
}
