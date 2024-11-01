import { BadgeRibbon, Card, Space } from "cui-solid"

export default () => {
    return <Space dir="v" size={24}>
        <Space dir="h" size={24}>
            <BadgeRibbon text="Ribbon">
                <Card title="Card Title" bordered>Card Content 飘带徽标 飘带徽标</Card>
            </BadgeRibbon>
            <BadgeRibbon text="Ribbon" align="start">
                <Card title="Card Title" bordered>Card Content 飘带徽标 飘带徽标</Card>
            </BadgeRibbon>
        </Space>
    </Space>
}
