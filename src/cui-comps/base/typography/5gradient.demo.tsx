import { Title, Space } from "cui-solid"

export default () => {
    return <Space dir="v" size={0}>
        <div>
            <Title inline style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h1. Typography Title</Title>
        </div>
        <div>
            <Title inline heading={2} style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h2. Typography Title</Title>
        </div>
        <div>
            <Title inline heading={3} style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h3. Typography Title</Title>
        </div>
        <div>
            <Title inline heading={4} style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h4. Typography Title</Title>
        </div>
        <div>
            <Title inline heading={5} style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h5. Typography Title</Title>
        </div>
        <div>
            <Title inline heading={6} style={{ margin: '8px 0' }} gradient={['-45deg', '#ff0000', '#2080f0']}>h6. Typography Title</Title>
        </div>
        <div>
            <Title heading={1} inline style={{ margin: '8px 0' }}
                gradient={['219deg',
                '#186cb8 19%',
                'transparent 19%','transparent 20%',
                '#2a9a9f 20%', '#2a9a9f  39%',
                'transparent 39%','transparent 40%',
                '#f1b211 40%','#f1b211 59%' ,
                'transparent 59%','transparent 60%',
                '#e83611 60%', '#e83611 79%',
                'transparent 79%', 'transparent 80%',
                '#f9002f 80%']}>Gradient Typography Title</Title>
        </div>
    </Space>
}
