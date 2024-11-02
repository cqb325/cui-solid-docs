import { JSX, JSXElement, splitProps } from 'solid-js';

export interface IconProps extends JSX.HTMLAttributes<HTMLSpanElement> {
    children?: JSXElement;
    size?: number;
    spin?: boolean;
    rotate?: number;
    prefixCls?: string;
    type?: string;
    class?: string;
    classList?: any;
    color?: string;
    strokeWidth?: number;
    style?: JSX.CSSProperties;
}

const Icon = (props: IconProps) => {
    const [local, restProps] = splitProps(props, ['strokeWidth', 'children', 'color', 'size', 'spin', 'rotate', 'prefixCls', 'type', 'class', 'classList', 'style']);
    const prefixCls = local.prefixCls ?? 'cui';
    const spin = local.spin ?? false;
    const type = local.type ?? '';
    const clazzList = () => {
        return {
            [`${props.class}`]: !!local.class,
            [`${prefixCls}-icon`]: true,
            [`${prefixCls}-icon-spinning`]: spin === true,
            [`${prefixCls}-icon-${type}`]: Boolean(type),
            ...local.classList
        }
    };
    const outerStyle: JSX.CSSProperties = {
    };
    if (Number.isSafeInteger(local.rotate)) {
        outerStyle.transform = `rotate(${local.rotate}deg)`;
    }
    if (Number.isSafeInteger(local.size)) {
        outerStyle['font-size'] = `${local.size}px`;
    }
    if (local.color) {
        outerStyle['color'] = local.color;
    }
    Object.assign(outerStyle, local.style);
    return <span role="img" aria-label={type} classList={clazzList()} style={outerStyle} {...restProps}>{local.children}</span>;
}


const convertIcon = (Svg: any, iconType: string, type: string = 'outline', props: IconProps) => {
    let color = props.color ?? undefined;
    const style: any = {};
    if (type === 'twotone') {
        style['--cui-icon-twotone-primary'] = color ?? '#333';
    }

    const strokeProps: any = {};
    if (Number.isSafeInteger(props.strokeWidth)) {
        strokeProps['stroke-width'] = `${props.strokeWidth}px`;
    }
    
    return <Icon prefixCls="cui" type={iconType} {...props} color={color}>
        <Svg style={style} {...strokeProps}/>
    </Icon>;
};

export { convertIcon };
export default Icon;