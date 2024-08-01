import { Banner, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Banner type="info" bordered>
            <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
        </Banner>
        <Banner type="warning" bordered>
            <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
        </Banner>
        <Banner type="success" bordered>
            <div>安装成功： 软件安装成功，已是最新版本。</div>
        </Banner>
        <Banner type="error" bordered>
            <div>尚未安装插件，该功能还无法使用</div>
        </Banner>
    </Space>
}
