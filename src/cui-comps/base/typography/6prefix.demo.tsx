import { Title, Space } from "cui-solid"

export default () => {
    return <Space dir="v" size={0}>
        <div>
            <Title heading={3} style={{ margin: '8px 0' }} inline prefix="bar" gradient={['-45deg', '#ff0000', '#2080f0']}>中文Typography Title With Bar</Title>
        </div>
        <div>
            <Title heading={3} style={{ margin: '8px 0' }} inline prefix="bar" prefixWidth={2} gradient={['-45deg', '#ff0000', '#2080f0']}>中文Typography Title With Bar</Title>
        </div>
        <div>
            <Title heading={6} style={{ margin: '8px 0' }} inline prefix="bar" prefixColor='#ff0000' gradient={['-45deg', '#ff0000', '#2080f0']}>中文Typography Title With Bar</Title>
        </div>
        <div>
            <Title heading={6} style={{ margin: '8px 0' }} inline prefix="bar" prefixColor={['-45deg', '#ff0000', '#2080f0']} gradient={['-45deg', '#ff0000', '#2080f0']}>中文Typography Title With Bar</Title>
        </div>
        <div>
            <Title heading={6} style={{ margin: '8px 0' }} inline prefix="bar" prefixGap={24} gradient={['-45deg', '#ff0000', '#2080f0']}>中文Typography Title With Bar</Title>
        </div>
    </Space>
}
