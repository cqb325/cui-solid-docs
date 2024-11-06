import { HView, Space, View, VView } from "cui-solid"

export default () => {
    const centerStyle = {
        'justify-content': 'center'
    }
    return <Space dir="v">
            <VView class="components-layout-demo" size="450px">
                <View class="layout-demo-header" size="64px" style={centerStyle}>Header</View>
                <View style={centerStyle}>Main</View>
                <View class="layout-demo-header" size="64px" style={centerStyle}>Footer</View>
            </VView>
            <VView class="components-layout-demo" size="450px">
                <View class="layout-demo-header" size="64px" style={centerStyle}>Header</View>
                <HView style={centerStyle}>
                    <View size="200px" style={centerStyle} class="layout-demo-sider">Sider</View>
                    <View style={centerStyle}>MAIN</View>
                </HView>
                <View class="layout-demo-header" size="64px" style={centerStyle}>Footer</View>
            </VView>
            <HView class="components-layout-demo" size="450px">
                <View size="150px" style={centerStyle} class="layout-demo-sider">Sider</View>
                <VView style={centerStyle}>
                    <View class="layout-demo-header" size="64px" style={centerStyle}>Header</View>
                    <View style={centerStyle}>MAIN</View>
                    <View class="layout-demo-header" size="64px" style={centerStyle}>Footer</View>
                </VView>
            </HView>
        </Space>
}
