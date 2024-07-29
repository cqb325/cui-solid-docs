import { lazy } from 'solid-js';

export const menuData = [
    {
        type: 'MenuItem',
        name: 'home',
        to: '/',
        title: '介绍'
    },
    {
        type: 'SubMenu',
        name: 'base',
        title: '基础组件',
        path: '/base',
        children: [
            {name: 'button', title: 'Button 按钮', path: 'button'},
            {name: 'icon', title: 'Icon 图标', path: 'icon'},
            {name: 'typography', title: 'Typography 排版', path: 'typography'},
            {name: 'avatar', title: 'Avatar 头像', path: 'avatar'},
            {name: 'avatarList', title: 'AvatarList 头像列表', path: 'avatarList'},
            {name: 'collapase', title: 'Collapase 折叠', path: 'collapase'},
            {name: 'popover', title: 'Popover 气泡提示', path: 'popover'},
            {name: 'spin', title: 'Spin 加载中', path: 'spin'},
            {name: 'tag', title: 'Tag 标签', path: 'tag'},
            {name: 'tooltip', title: 'Tooltip 文字提示', path: 'tooltip'},
            {name: 'divider', title: 'Divider 分割线', path: 'divider'},
            {name: 'draggable', title: 'Draggable 拖拽', path: 'draggable'},
        ]
    },
    {
        type: 'SubMenu',
        name: 'layout',
        title: '布局',
        path: '/layout',
        children: [
            {name: 'grid', title: 'Row/Col 栅格', path: 'grid'},
            {name: 'view', title: 'View 视图', path: 'view'},
            {name: 'space', title: 'Space 间隔', path: 'space'},
            {name: 'list', title: 'List 列表', path: 'list'},
            {name: 'split', title: 'Split 面板分割', path: 'split'},
            {name: 'skeleton', title: 'Skeleton 骨架屏', path: 'skeleton'},
            {name: 'tablestylelayout', title: 'TableStyleLayout 类表格布局', path: 'tablestylelayout'},
        ]
    },
    {
        type: 'SubMenu',
        name: 'nav',
        title: '导航',
        path: '/nav',
        children: [
            {name: 'breadcrumb', title: 'Breadcrumb 面包屑', path: 'breadcrumb'},
            {name: 'dropdown', title: 'Dropdown 下拉菜单', path: 'dropdown'},
            {name: 'menu', title: 'Menu 导航菜单', path: 'menu'},
            {name: 'accordion', title: 'Accordion 手风琴面板', path: 'accordion'},
            {name: 'pagination', title: 'Pagination 分页', path: 'pagination'},
            {name: 'tabs', title: 'Tabs 标签页', path: 'tabs'},
            {name: 'badge', title: 'Badge 徽标', path: 'badge'},
            {name: 'anchor', title: 'Anchor 锚点', path: 'anchor'},
            {name: 'loadingbar', title: 'LoadingBar 加载进度条', path: 'loadingbar'},
            {name: 'steps', title: 'Steps 步骤', path: 'steps'},
            {name: 'indexlist', title: 'IndexList 索引列表', path: 'indexlist'},
        ]
    },
    {
        type: 'SubMenu',
        name: 'view',
        title: '视图',
        path: '/view',
        children: [
            {name: 'message', title: 'Message 消息提示', path: 'message'},
            {name: 'notice', title: 'Notice 通知', path: 'notice'},
            {name: 'modal', title: 'Modal 对话框', path: 'modal'},
            {name: 'tree', title: 'Tree 树状控件', path: 'tree'},
            {name: 'image', title: 'Image 图片', path: 'image'},
            // // {name: 'imagepreview', title: 'ImagePreview', path: 'imagepreview', component: lazy(() => import('./pages/view/ImagePreview'))},
            {name: 'timeline', title: 'Timeline 时间轴', path: 'timeline'},
            {name: 'carousel', title: 'Carousel 跑马灯', path: 'carousel'},
            {name: 'exception', title: 'Exception 异常页面', path: 'exception'},
            {name: 'qrcode', title: 'QRCode 二维码', path: 'qrcode'},
            {name: 'drawer', title: 'Drawer 抽屉', path: 'drawer'},
            {name: 'pagefooter', title: 'PageFooter 页底', path: 'pagefooter'},
            {name: 'banner', title: 'Banner 通知横幅', path: 'banner'},
            {name: 'sidebyside', title: 'SideBySide 对比', path: 'sidebyside'},
            {name: 'watermark', title: 'Watermark 水印', path: 'watermark'},
        ]
    },
    {
        type: 'SubMenu',
        name: 'forms',
        title: '表单',
        path: '/forms',
        children: [
            {name: 'form', title: 'Form 表单', path: 'form'},
            {name: 'checkbox', title: 'Checkbox 多选框', path: 'checkbox'},
            {name: 'radio', title: 'Radio 单选框', path: 'radio'},
            {name: 'input', title: 'Input 输入框', path: 'input'},
            {name: 'inputgroup', title: 'InputGroup 输入框组', path: 'inputgroup'},
            {name: 'select', title: 'Select 选择框', path: 'select'},
            {name: 'table', title: 'Table 表格', path: 'table'},
            {name: 'timepicker', title: 'Timepicker 时间选择', path: 'timepicker'},
            {name: 'datepicker', title: 'Datepicker 日期选择', path: 'datepicker'},
            {name: 'cascader', title: 'Cascader 级联选择', path: 'cascader'},
            {name: 'slider', title: 'Slider 滑块', path: 'slider'},
            {name: 'treeselect', title: 'TreeSelect 树选择', path: 'treeselect'},
            {name: 'upload', title: 'Upload 上传', path: 'upload'},
            {name: 'progress', title: 'Progress 进度条', path: 'progress'},
            {name: 'transfer', title: 'Transfer 穿梭框', path: 'transfer'},
            {name: 'switch', title: 'Switch 开关', path: 'switch'},
            {name: 'rate', title: 'Rate 评分', path: 'rate'},
            {name: 'spinner', title: 'Spinner 数字输入框', path: 'spinner'},
            {name: 'autocomplete', title: 'AutoComplete 自动完成', path: 'autocomplete'},
            {name: 'colorpicker', title: 'ColorPicker 颜色选择器', path: 'colorpicker'},
            {name: 'login', title: 'Login 登录', path: 'login'},
        ]
    },
    {
        type: 'SubMenu',
        name: 'other',
        title: '其他',
        path: '/other',
        children: [
            {name: 'countup', title: 'CountUp 数字动画', path: 'countup'},
            {name: 'countdown', title: 'CountDown 倒计时', path: 'countdown'},
            {name: 'virtuallist', title: 'VirtualList 虚拟列表', path: 'virtuallist'},
            {name: 'wordcount', title: 'WordCount 字数统计', path: 'wordcount'},
        ]
    }
];

// export const Rs = [
//     {path: '/base', title: '', name: '', children: [
//         {path: '/button', component: lazy(() => import('./pages/base/Button'))}
//     ]},
// ];
