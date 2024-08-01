import { Banner, Icon, Space } from "cui-solid"

export default () => {
    return <Space dir="v">
        <Banner type="info" fullMode={false} bordered icon={<Icon name="heart" size={20}/>} title="Title">
            <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
        </Banner>
    </Space>
}