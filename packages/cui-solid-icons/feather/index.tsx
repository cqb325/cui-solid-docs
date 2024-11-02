
import type { JSX } from 'solid-js';
import { convertIcon, IconProps } from '../Icon';

export function FeatherActivity(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-activity cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    );
    return convertIcon(FN, "activity", "custom", props);
}


export function FeatherAirplay(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-airplay cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
            <polygon points="12 15 17 21 7 21 12 15" />
        </svg>
    );
    return convertIcon(FN, "airplay", "custom", props);
}


export function FeatherAlertCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-alert-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={8} x2={12} y2={12} />
            <line x1={12} y1={16} x2={12.01} y2={16} />
        </svg>
    );
    return convertIcon(FN, "alert-circle", "custom", props);
}


export function FeatherAlertOctagon(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-alert-octagon cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
            <line x1={12} y1={8} x2={12} y2={12} />
            <line x1={12} y1={16} x2={12.01} y2={16} />
        </svg>
    );
    return convertIcon(FN, "alert-octagon", "custom", props);
}


export function FeatherAlertTriangle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-alert-triangle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1={12} y1={9} x2={12} y2={13} />
            <line x1={12} y1={17} x2={12.01} y2={17} />
        </svg>
    );
    return convertIcon(FN, "alert-triangle", "custom", props);
}


export function FeatherAlignCenter(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-align-center cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={18} y1={10} x2={6} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={18} y1={18} x2={6} y2={18} />
        </svg>
    );
    return convertIcon(FN, "align-center", "custom", props);
}


export function FeatherAlignJustify(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-align-justify cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={21} y1={10} x2={3} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={21} y1={18} x2={3} y2={18} />
        </svg>
    );
    return convertIcon(FN, "align-justify", "custom", props);
}


export function FeatherAlignLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-align-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={17} y1={10} x2={3} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={17} y1={18} x2={3} y2={18} />
        </svg>
    );
    return convertIcon(FN, "align-left", "custom", props);
}


export function FeatherAlignRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-align-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={21} y1={10} x2={7} y2={10} />
            <line x1={21} y1={6} x2={3} y2={6} />
            <line x1={21} y1={14} x2={3} y2={14} />
            <line x1={21} y1={18} x2={7} y2={18} />
        </svg>
    );
    return convertIcon(FN, "align-right", "custom", props);
}


export function FeatherAnchor(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-anchor cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={5} r={3} />
            <line x1={12} y1={22} x2={12} y2={8} />
            <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
    );
    return convertIcon(FN, "anchor", "custom", props);
}


export function FeatherAperture(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-aperture cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={14.31} y1={8} x2={20.05} y2={17.94} />
            <line x1={9.69} y1={8} x2={21.17} y2={8} />
            <line x1={7.38} y1={12} x2={13.12} y2={2.06} />
            <line x1={9.69} y1={16} x2={3.95} y2={6.06} />
            <line x1={14.31} y1={16} x2={2.83} y2={16} />
            <line x1={16.62} y1={12} x2={10.88} y2={21.94} />
        </svg>
    );
    return convertIcon(FN, "aperture", "custom", props);
}


export function FeatherArchive(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-archive cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x={1} y={3} width={22} height={5} />
            <line x1={10} y1={12} x2={14} y2={12} />
        </svg>
    );
    return convertIcon(FN, "archive", "custom", props);
}


export function FeatherArrowDownCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-down-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="8 12 12 16 16 12" />
            <line x1={12} y1={8} x2={12} y2={16} />
        </svg>
    );
    return convertIcon(FN, "arrow-down-circle", "custom", props);
}


export function FeatherArrowDownLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-down-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={17} y1={7} x2={7} y2={17} />
            <polyline points="17 17 7 17 7 7" />
        </svg>
    );
    return convertIcon(FN, "arrow-down-left", "custom", props);
}


export function FeatherArrowDownRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-down-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={7} y1={7} x2={17} y2={17} />
            <polyline points="17 7 17 17 7 17" />
        </svg>
    );
    return convertIcon(FN, "arrow-down-right", "custom", props);
}


export function FeatherArrowDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={5} x2={12} y2={19} />
            <polyline points="19 12 12 19 5 12" />
        </svg>
    );
    return convertIcon(FN, "arrow-down", "custom", props);
}


export function FeatherArrowLeftCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-left-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="12 8 8 12 12 16" />
            <line x1={16} y1={12} x2={8} y2={12} />
        </svg>
    );
    return convertIcon(FN, "arrow-left-circle", "custom", props);
}


export function FeatherArrowLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={19} y1={12} x2={5} y2={12} />
            <polyline points="12 19 5 12 12 5" />
        </svg>
    );
    return convertIcon(FN, "arrow-left", "custom", props);
}


export function FeatherArrowRightCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-right-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="12 16 16 12 12 8" />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "arrow-right-circle", "custom", props);
}


export function FeatherArrowRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={5} y1={12} x2={19} y2={12} />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
    return convertIcon(FN, "arrow-right", "custom", props);
}


export function FeatherArrowUpCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-up-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="16 12 12 8 8 12" />
            <line x1={12} y1={16} x2={12} y2={8} />
        </svg>
    );
    return convertIcon(FN, "arrow-up-circle", "custom", props);
}


export function FeatherArrowUpLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-up-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={17} y1={17} x2={7} y2={7} />
            <polyline points="7 17 7 7 17 7" />
        </svg>
    );
    return convertIcon(FN, "arrow-up-left", "custom", props);
}


export function FeatherArrowUpRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-up-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={7} y1={17} x2={17} y2={7} />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
    return convertIcon(FN, "arrow-up-right", "custom", props);
}


export function FeatherArrowUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-arrow-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={19} x2={12} y2={5} />
            <polyline points="5 12 12 5 19 12" />
        </svg>
    );
    return convertIcon(FN, "arrow-up", "custom", props);
}


export function FeatherAtSign(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-at-sign cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={4} />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
        </svg>
    );
    return convertIcon(FN, "at-sign", "custom", props);
}


export function FeatherAward(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-award cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={8} r={7} />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    );
    return convertIcon(FN, "award", "custom", props);
}


export function FeatherBarChart2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bar-chart-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={18} y1={20} x2={18} y2={10} />
            <line x1={12} y1={20} x2={12} y2={4} />
            <line x1={6} y1={20} x2={6} y2={14} />
        </svg>
    );
    return convertIcon(FN, "bar-chart-2", "custom", props);
}


export function FeatherBarChart(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bar-chart cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={20} x2={12} y2={10} />
            <line x1={18} y1={20} x2={18} y2={4} />
            <line x1={6} y1={20} x2={6} y2={16} />
        </svg>
    );
    return convertIcon(FN, "bar-chart", "custom", props);
}


export function FeatherBatteryCharging(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-battery-charging cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
            <line x1={23} y1={13} x2={23} y2={11} />
            <polyline points="11 6 7 12 13 12 9 18" />
        </svg>
    );
    return convertIcon(FN, "battery-charging", "custom", props);
}


export function FeatherBattery(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-battery cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
            <line x1={23} y1={13} x2={23} y2={11} />
        </svg>
    );
    return convertIcon(FN, "battery", "custom", props);
}


export function FeatherBellOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bell-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            <path d="M18.63 13A17.89 17.89 0 0 1 18 8" />
            <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
            <path d="M18 8a6 6 0 0 0-9.33-5" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "bell-off", "custom", props);
}


export function FeatherBell(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bell cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
    );
    return convertIcon(FN, "bell", "custom", props);
}


export function FeatherBluetooth(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bluetooth cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
        </svg>
    );
    return convertIcon(FN, "bluetooth", "custom", props);
}


export function FeatherBold(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bold cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        </svg>
    );
    return convertIcon(FN, "bold", "custom", props);
}


export function FeatherBookOpen(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-book-open cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    );
    return convertIcon(FN, "book-open", "custom", props);
}


export function FeatherBook(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-book cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    );
    return convertIcon(FN, "book", "custom", props);
}


export function FeatherBookmark(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-bookmark cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
    );
    return convertIcon(FN, "bookmark", "custom", props);
}


export function FeatherBox(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-box cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1={12} y1={22.08} x2={12} y2={12} />
        </svg>
    );
    return convertIcon(FN, "box", "custom", props);
}


export function FeatherBriefcase(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-briefcase cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
    return convertIcon(FN, "briefcase", "custom", props);
}


export function FeatherCalendar(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-calendar cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
            <line x1={16} y1={2} x2={16} y2={6} />
            <line x1={8} y1={2} x2={8} y2={6} />
            <line x1={3} y1={10} x2={21} y2={10} />
        </svg>
    );
    return convertIcon(FN, "calendar", "custom", props);
}


export function FeatherCameraOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-camera-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={1} y1={1} x2={23} y2={23} />
            <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
        </svg>
    );
    return convertIcon(FN, "camera-off", "custom", props);
}


export function FeatherCamera(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-camera cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx={12} cy={13} r={4} />
        </svg>
    );
    return convertIcon(FN, "camera", "custom", props);
}


export function FeatherCast(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cast cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
            <line x1={2} y1={20} x2={2.01} y2={20} />
        </svg>
    );
    return convertIcon(FN, "cast", "custom", props);
}


export function FeatherCheckCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-check-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
    return convertIcon(FN, "check-circle", "custom", props);
}


export function FeatherCheckSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-check-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
    );
    return convertIcon(FN, "check-square", "custom", props);
}


export function FeatherCheck(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-check cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
    return convertIcon(FN, "check", "custom", props);
}


export function FeatherChevronDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevron-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
    return convertIcon(FN, "chevron-down", "custom", props);
}


export function FeatherChevronLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevron-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
    return convertIcon(FN, "chevron-left", "custom", props);
}


export function FeatherChevronRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevron-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
    return convertIcon(FN, "chevron-right", "custom", props);
}


export function FeatherChevronUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevron-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="18 15 12 9 6 15" />
        </svg>
    );
    return convertIcon(FN, "chevron-up", "custom", props);
}


export function FeatherChevronsDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevrons-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
        </svg>
    );
    return convertIcon(FN, "chevrons-down", "custom", props);
}


export function FeatherChevronsLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevrons-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
        </svg>
    );
    return convertIcon(FN, "chevrons-left", "custom", props);
}


export function FeatherChevronsRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevrons-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
        </svg>
    );
    return convertIcon(FN, "chevrons-right", "custom", props);
}


export function FeatherChevronsUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chevrons-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="17 11 12 6 7 11" />
            <polyline points="17 18 12 13 7 18" />
        </svg>
    );
    return convertIcon(FN, "chevrons-up", "custom", props);
}


export function FeatherChrome(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-chrome cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={4} />
            <line x1={21.17} y1={8} x2={12} y2={8} />
            <line x1={3.95} y1={6.06} x2={8.54} y2={14} />
            <line x1={10.88} y1={21.94} x2={15.46} y2={14} />
        </svg>
    );
    return convertIcon(FN, "chrome", "custom", props);
}


export function FeatherCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
        </svg>
    );
    return convertIcon(FN, "circle", "custom", props);
}


export function FeatherClipboard(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-clipboard cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
        </svg>
    );
    return convertIcon(FN, "clipboard", "custom", props);
}


export function FeatherClock(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-clock cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
    return convertIcon(FN, "clock", "custom", props);
}


export function FeatherCloudDrizzle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud-drizzle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={8} y1={19} x2={8} y2={21} />
            <line x1={8} y1={13} x2={8} y2={15} />
            <line x1={16} y1={19} x2={16} y2={21} />
            <line x1={16} y1={13} x2={16} y2={15} />
            <line x1={12} y1={21} x2={12} y2={23} />
            <line x1={12} y1={15} x2={12} y2={17} />
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </svg>
    );
    return convertIcon(FN, "cloud-drizzle", "custom", props);
}


export function FeatherCloudLightning(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud-lightning cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
            <polyline points="13 11 9 17 15 17 11 23" />
        </svg>
    );
    return convertIcon(FN, "cloud-lightning", "custom", props);
}


export function FeatherCloudOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "cloud-off", "custom", props);
}


export function FeatherCloudRain(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud-rain cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={16} y1={13} x2={16} y2={21} />
            <line x1={8} y1={13} x2={8} y2={21} />
            <line x1={12} y1={15} x2={12} y2={23} />
            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </svg>
    );
    return convertIcon(FN, "cloud-rain", "custom", props);
}


export function FeatherCloudSnow(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud-snow cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
            <line x1={8} y1={16} x2={8.01} y2={16} />
            <line x1={8} y1={20} x2={8.01} y2={20} />
            <line x1={12} y1={18} x2={12.01} y2={18} />
            <line x1={12} y1={22} x2={12.01} y2={22} />
            <line x1={16} y1={16} x2={16.01} y2={16} />
            <line x1={16} y1={20} x2={16.01} y2={20} />
        </svg>
    );
    return convertIcon(FN, "cloud-snow", "custom", props);
}


export function FeatherCloud(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cloud cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    );
    return convertIcon(FN, "cloud", "custom", props);
}


export function FeatherCode(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-code cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
    return convertIcon(FN, "code", "custom", props);
}


export function FeatherCodepen(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-codepen cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1={12} y1={22} x2={12} y2={15.5} />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1={12} y1={2} x2={12} y2={8.5} />
        </svg>
    );
    return convertIcon(FN, "codepen", "custom", props);
}


export function FeatherCodesandbox(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-codesandbox cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
            <polyline points="7.5 19.79 7.5 14.6 3 12" />
            <polyline points="21 12 16.5 14.6 16.5 19.79" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1={12} y1={22.08} x2={12} y2={12} />
        </svg>
    );
    return convertIcon(FN, "codesandbox", "custom", props);
}


export function FeatherCoffee(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-coffee cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1={6} y1={1} x2={6} y2={4} />
            <line x1={10} y1={1} x2={10} y2={4} />
            <line x1={14} y1={1} x2={14} y2={4} />
        </svg>
    );
    return convertIcon(FN, "coffee", "custom", props);
}


export function FeatherColumns(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-columns cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
        </svg>
    );
    return convertIcon(FN, "columns", "custom", props);
}


export function FeatherCommand(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-command cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
    );
    return convertIcon(FN, "command", "custom", props);
}


export function FeatherCompass(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-compass cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    );
    return convertIcon(FN, "compass", "custom", props);
}


export function FeatherCopy(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-copy cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    );
    return convertIcon(FN, "copy", "custom", props);
}


export function FeatherCornerDownLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-down-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="9 10 4 15 9 20" />
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </svg>
    );
    return convertIcon(FN, "corner-down-left", "custom", props);
}


export function FeatherCornerDownRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-down-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="15 10 20 15 15 20" />
            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
    );
    return convertIcon(FN, "corner-down-right", "custom", props);
}


export function FeatherCornerLeftDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-left-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="14 15 9 20 4 15" />
            <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
        </svg>
    );
    return convertIcon(FN, "corner-left-down", "custom", props);
}


export function FeatherCornerLeftUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-left-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="14 9 9 4 4 9" />
            <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
        </svg>
    );
    return convertIcon(FN, "corner-left-up", "custom", props);
}


export function FeatherCornerRightDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-right-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="10 15 15 20 20 15" />
            <path d="M4 4h7a4 4 0 0 1 4 4v12" />
        </svg>
    );
    return convertIcon(FN, "corner-right-down", "custom", props);
}


export function FeatherCornerRightUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-right-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="10 9 15 4 20 9" />
            <path d="M4 20h7a4 4 0 0 0 4-4V4" />
        </svg>
    );
    return convertIcon(FN, "corner-right-up", "custom", props);
}


export function FeatherCornerUpLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-up-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="9 14 4 9 9 4" />
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
        </svg>
    );
    return convertIcon(FN, "corner-up-left", "custom", props);
}


export function FeatherCornerUpRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-corner-up-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="15 14 20 9 15 4" />
            <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
        </svg>
    );
    return convertIcon(FN, "corner-up-right", "custom", props);
}


export function FeatherCpu(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-cpu cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
            <rect x={9} y={9} width={6} height={6} />
            <line x1={9} y1={1} x2={9} y2={4} />
            <line x1={15} y1={1} x2={15} y2={4} />
            <line x1={9} y1={20} x2={9} y2={23} />
            <line x1={15} y1={20} x2={15} y2={23} />
            <line x1={20} y1={9} x2={23} y2={9} />
            <line x1={20} y1={14} x2={23} y2={14} />
            <line x1={1} y1={9} x2={4} y2={9} />
            <line x1={1} y1={14} x2={4} y2={14} />
        </svg>
    );
    return convertIcon(FN, "cpu", "custom", props);
}


export function FeatherCreditCard(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-credit-card cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
            <line x1={1} y1={10} x2={23} y2={10} />
        </svg>
    );
    return convertIcon(FN, "credit-card", "custom", props);
}


export function FeatherCrop(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-crop cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
            <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
        </svg>
    );
    return convertIcon(FN, "crop", "custom", props);
}


export function FeatherCrosshair(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-crosshair cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={22} y1={12} x2={18} y2={12} />
            <line x1={6} y1={12} x2={2} y2={12} />
            <line x1={12} y1={6} x2={12} y2={2} />
            <line x1={12} y1={22} x2={12} y2={18} />
        </svg>
    );
    return convertIcon(FN, "crosshair", "custom", props);
}


export function FeatherDatabase(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-database cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    );
    return convertIcon(FN, "database", "custom", props);
}


export function FeatherDelete(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-delete cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
            <line x1={18} y1={9} x2={12} y2={15} />
            <line x1={12} y1={9} x2={18} y2={15} />
        </svg>
    );
    return convertIcon(FN, "delete", "custom", props);
}


export function FeatherDisc(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-disc cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={3} />
        </svg>
    );
    return convertIcon(FN, "disc", "custom", props);
}


export function FeatherDivideCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-divide-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={8} y1={12} x2={16} y2={12} />
            <line x1={12} y1={16} x2={12} y2={16} />
            <line x1={12} y1={8} x2={12} y2={8} />
            <circle cx={12} cy={12} r={10} />
        </svg>
    );
    return convertIcon(FN, "divide-circle", "custom", props);
}


export function FeatherDivideSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-divide-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={8} y1={12} x2={16} y2={12} />
            <line x1={12} y1={16} x2={12} y2={16} />
            <line x1={12} y1={8} x2={12} y2={8} />
        </svg>
    );
    return convertIcon(FN, "divide-square", "custom", props);
}


export function FeatherDivide(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-divide cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={6} r={2} />
            <line x1={5} y1={12} x2={19} y2={12} />
            <circle cx={12} cy={18} r={2} />
        </svg>
    );
    return convertIcon(FN, "divide", "custom", props);
}


export function FeatherDollarSign(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-dollar-sign cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={1} x2={12} y2={23} />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
    return convertIcon(FN, "dollar-sign", "custom", props);
}


export function FeatherDownloadCloud(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-download-cloud cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="8 17 12 21 16 17" />
            <line x1={12} y1={12} x2={12} y2={21} />
            <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
        </svg>
    );
    return convertIcon(FN, "download-cloud", "custom", props);
}


export function FeatherDownload(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-download cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} y1={15} x2={12} y2={3} />
        </svg>
    );
    return convertIcon(FN, "download", "custom", props);
}


export function FeatherDribbble(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-dribbble cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
        </svg>
    );
    return convertIcon(FN, "dribbble", "custom", props);
}


export function FeatherDroplet(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-droplet cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    );
    return convertIcon(FN, "droplet", "custom", props);
}


export function FeatherEdit2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-edit-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
    );
    return convertIcon(FN, "edit-2", "custom", props);
}


export function FeatherEdit3(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-edit-3 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
    );
    return convertIcon(FN, "edit-3", "custom", props);
}


export function FeatherEdit(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-edit cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    );
    return convertIcon(FN, "edit", "custom", props);
}


export function FeatherExternalLink(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-external-link cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1={10} y1={14} x2={21} y2={3} />
        </svg>
    );
    return convertIcon(FN, "external-link", "custom", props);
}


export function FeatherEyeOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-eye-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "eye-off", "custom", props);
}


export function FeatherEye(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-eye cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
        </svg>
    );
    return convertIcon(FN, "eye", "custom", props);
}


export function FeatherFacebook(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-facebook cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
    return convertIcon(FN, "facebook", "custom", props);
}


export function FeatherFastForward(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-fast-forward cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="13 19 22 12 13 5 13 19" />
            <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
    );
    return convertIcon(FN, "fast-forward", "custom", props);
}


export function FeatherFeather(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-feather cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1={16} y1={8} x2={2} y2={22} />
            <line x1={17.5} y1={15} x2={9} y2={15} />
        </svg>
    );
    return convertIcon(FN, "feather", "custom", props);
}


export function FeatherFigma(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-figma cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
    );
    return convertIcon(FN, "figma", "custom", props);
}


export function FeatherFileMinus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-file-minus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={9} y1={15} x2={15} y2={15} />
        </svg>
    );
    return convertIcon(FN, "file-minus", "custom", props);
}


export function FeatherFilePlus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-file-plus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={12} y1={18} x2={12} y2={12} />
            <line x1={9} y1={15} x2={15} y2={15} />
        </svg>
    );
    return convertIcon(FN, "file-plus", "custom", props);
}


export function FeatherFileText(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-file-text cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={16} y1={13} x2={8} y2={13} />
            <line x1={16} y1={17} x2={8} y2={17} />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );
    return convertIcon(FN, "file-text", "custom", props);
}


export function FeatherFile(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-file cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
        </svg>
    );
    return convertIcon(FN, "file", "custom", props);
}


export function FeatherFilm(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-film cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
            <line x1={7} y1={2} x2={7} y2={22} />
            <line x1={17} y1={2} x2={17} y2={22} />
            <line x1={2} y1={12} x2={22} y2={12} />
            <line x1={2} y1={7} x2={7} y2={7} />
            <line x1={2} y1={17} x2={7} y2={17} />
            <line x1={17} y1={17} x2={22} y2={17} />
            <line x1={17} y1={7} x2={22} y2={7} />
        </svg>
    );
    return convertIcon(FN, "film", "custom", props);
}


export function FeatherFilter(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-filter cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
    return convertIcon(FN, "filter", "custom", props);
}


export function FeatherFlag(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-flag cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1={4} y1={22} x2={4} y2={15} />
        </svg>
    );
    return convertIcon(FN, "flag", "custom", props);
}


export function FeatherFolderMinus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-folder-minus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            <line x1={9} y1={14} x2={15} y2={14} />
        </svg>
    );
    return convertIcon(FN, "folder-minus", "custom", props);
}


export function FeatherFolderPlus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-folder-plus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            <line x1={12} y1={11} x2={12} y2={17} />
            <line x1={9} y1={14} x2={15} y2={14} />
        </svg>
    );
    return convertIcon(FN, "folder-plus", "custom", props);
}


export function FeatherFolder(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-folder cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
    );
    return convertIcon(FN, "folder", "custom", props);
}


export function FeatherFramer(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-framer cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
        </svg>
    );
    return convertIcon(FN, "framer", "custom", props);
}


export function FeatherFrown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-frown cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1={9} y1={9} x2={9.01} y2={9} />
            <line x1={15} y1={9} x2={15.01} y2={9} />
        </svg>
    );
    return convertIcon(FN, "frown", "custom", props);
}


export function FeatherGift(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-gift cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x={2} y={7} width={20} height={5} />
            <line x1={12} y1={22} x2={12} y2={7} />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    );
    return convertIcon(FN, "gift", "custom", props);
}


export function FeatherGitBranch(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-git-branch cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={6} y1={3} x2={6} y2={15} />
            <circle cx={18} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
    );
    return convertIcon(FN, "git-branch", "custom", props);
}


export function FeatherGitCommit(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-git-commit cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={4} />
            <line x1={1.05} y1={12} x2={7} y2={12} />
            <line x1={17.01} y1={12} x2={22.96} y2={12} />
        </svg>
    );
    return convertIcon(FN, "git-commit", "custom", props);
}


export function FeatherGitMerge(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-git-merge cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={18} cy={18} r={3} />
            <circle cx={6} cy={6} r={3} />
            <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
    );
    return convertIcon(FN, "git-merge", "custom", props);
}


export function FeatherGitPullRequest(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-git-pull-request cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={18} cy={18} r={3} />
            <circle cx={6} cy={6} r={3} />
            <path d="M13 6h3a2 2 0 0 1 2 2v7" />
            <line x1={6} y1={9} x2={6} y2={21} />
        </svg>
    );
    return convertIcon(FN, "git-pull-request", "custom", props);
}


export function FeatherGithub(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-github cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
    return convertIcon(FN, "github", "custom", props);
}


export function FeatherGitlab(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-gitlab cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
        </svg>
    );
    return convertIcon(FN, "gitlab", "custom", props);
}


export function FeatherGlobe(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-globe cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={2} y1={12} x2={22} y2={12} />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
    return convertIcon(FN, "globe", "custom", props);
}


export function FeatherGrid(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-grid cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={7} height={7} />
            <rect x={14} y={3} width={7} height={7} />
            <rect x={14} y={14} width={7} height={7} />
            <rect x={3} y={14} width={7} height={7} />
        </svg>
    );
    return convertIcon(FN, "grid", "custom", props);
}


export function FeatherHardDrive(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-hard-drive cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={22} y1={12} x2={2} y2={12} />
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            <line x1={6} y1={16} x2={6.01} y2={16} />
            <line x1={10} y1={16} x2={10.01} y2={16} />
        </svg>
    );
    return convertIcon(FN, "hard-drive", "custom", props);
}


export function FeatherHash(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-hash cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={4} y1={9} x2={20} y2={9} />
            <line x1={4} y1={15} x2={20} y2={15} />
            <line x1={10} y1={3} x2={8} y2={21} />
            <line x1={16} y1={3} x2={14} y2={21} />
        </svg>
    );
    return convertIcon(FN, "hash", "custom", props);
}


export function FeatherHeadphones(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-headphones cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
    );
    return convertIcon(FN, "headphones", "custom", props);
}


export function FeatherHeart(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-heart cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
    return convertIcon(FN, "heart", "custom", props);
}


export function FeatherHelpCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-help-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1={12} y1={17} x2={12.01} y2={17} />
        </svg>
    );
    return convertIcon(FN, "help-circle", "custom", props);
}


export function FeatherHexagon(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-hexagon cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
    );
    return convertIcon(FN, "hexagon", "custom", props);
}


export function FeatherHome(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-home cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
    return convertIcon(FN, "home", "custom", props);
}


export function FeatherImage(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-image cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <circle cx={8.5} cy={8.5} r={1.5} />
            <polyline points="21 15 16 10 5 21" />
        </svg>
    );
    return convertIcon(FN, "image", "custom", props);
}


export function FeatherInbox(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-inbox cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    );
    return convertIcon(FN, "inbox", "custom", props);
}


export function FeatherInfo(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-info cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={16} x2={12} y2={12} />
            <line x1={12} y1={8} x2={12.01} y2={8} />
        </svg>
    );
    return convertIcon(FN, "info", "custom", props);
}


export function FeatherInstagram(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-instagram cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
        </svg>
    );
    return convertIcon(FN, "instagram", "custom", props);
}


export function FeatherItalic(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-italic cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={19} y1={4} x2={10} y2={4} />
            <line x1={14} y1={20} x2={5} y2={20} />
            <line x1={15} y1={4} x2={9} y2={20} />
        </svg>
    );
    return convertIcon(FN, "italic", "custom", props);
}


export function FeatherKey(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-key cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
    );
    return convertIcon(FN, "key", "custom", props);
}


export function FeatherLayers(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-layers cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    );
    return convertIcon(FN, "layers", "custom", props);
}


export function FeatherLayout(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-layout cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={3} y1={9} x2={21} y2={9} />
            <line x1={9} y1={21} x2={9} y2={9} />
        </svg>
    );
    return convertIcon(FN, "layout", "custom", props);
}


export function FeatherLifeBuoy(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-life-buoy cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={4} />
            <line x1={4.93} y1={4.93} x2={9.17} y2={9.17} />
            <line x1={14.83} y1={14.83} x2={19.07} y2={19.07} />
            <line x1={14.83} y1={9.17} x2={19.07} y2={4.93} />
            <line x1={14.83} y1={9.17} x2={18.36} y2={5.64} />
            <line x1={4.93} y1={19.07} x2={9.17} y2={14.83} />
        </svg>
    );
    return convertIcon(FN, "life-buoy", "custom", props);
}


export function FeatherLink2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-link-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "link-2", "custom", props);
}


export function FeatherLink(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-link cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
    return convertIcon(FN, "link", "custom", props);
}


export function FeatherLinkedin(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-linkedin cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x={2} y={9} width={4} height={12} />
            <circle cx={4} cy={4} r={2} />
        </svg>
    );
    return convertIcon(FN, "linkedin", "custom", props);
}


export function FeatherList(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-list cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={8} y1={6} x2={21} y2={6} />
            <line x1={8} y1={12} x2={21} y2={12} />
            <line x1={8} y1={18} x2={21} y2={18} />
            <line x1={3} y1={6} x2={3.01} y2={6} />
            <line x1={3} y1={12} x2={3.01} y2={12} />
            <line x1={3} y1={18} x2={3.01} y2={18} />
        </svg>
    );
    return convertIcon(FN, "list", "custom", props);
}


export function FeatherLoader(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-loader cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={2} x2={12} y2={6} />
            <line x1={12} y1={18} x2={12} y2={22} />
            <line x1={4.93} y1={4.93} x2={7.76} y2={7.76} />
            <line x1={16.24} y1={16.24} x2={19.07} y2={19.07} />
            <line x1={2} y1={12} x2={6} y2={12} />
            <line x1={18} y1={12} x2={22} y2={12} />
            <line x1={4.93} y1={19.07} x2={7.76} y2={16.24} />
            <line x1={16.24} y1={7.76} x2={19.07} y2={4.93} />
        </svg>
    );
    return convertIcon(FN, "loader", "custom", props);
}


export function FeatherLock(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-lock cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
    return convertIcon(FN, "lock", "custom", props);
}


export function FeatherLogIn(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-log-in cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1={15} y1={12} x2={3} y2={12} />
        </svg>
    );
    return convertIcon(FN, "log-in", "custom", props);
}


export function FeatherLogOut(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-log-out cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1={21} y1={12} x2={9} y2={12} />
        </svg>
    );
    return convertIcon(FN, "log-out", "custom", props);
}


export function FeatherMail(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-mail cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
    return convertIcon(FN, "mail", "custom", props);
}


export function FeatherMapPin(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-map-pin cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx={12} cy={10} r={3} />
        </svg>
    );
    return convertIcon(FN, "map-pin", "custom", props);
}


export function FeatherMap(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-map cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1={8} y1={2} x2={8} y2={18} />
            <line x1={16} y1={6} x2={16} y2={22} />
        </svg>
    );
    return convertIcon(FN, "map", "custom", props);
}


export function FeatherMaximize2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-maximize-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1={21} y1={3} x2={14} y2={10} />
            <line x1={3} y1={21} x2={10} y2={14} />
        </svg>
    );
    return convertIcon(FN, "maximize-2", "custom", props);
}


export function FeatherMaximize(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-maximize cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
    );
    return convertIcon(FN, "maximize", "custom", props);
}


export function FeatherMeh(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-meh cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={8} y1={15} x2={16} y2={15} />
            <line x1={9} y1={9} x2={9.01} y2={9} />
            <line x1={15} y1={9} x2={15.01} y2={9} />
        </svg>
    );
    return convertIcon(FN, "meh", "custom", props);
}


export function FeatherMenu(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-menu cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
        </svg>
    );
    return convertIcon(FN, "menu", "custom", props);
}


export function FeatherMessageCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-message-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    );
    return convertIcon(FN, "message-circle", "custom", props);
}


export function FeatherMessageSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-message-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
    return convertIcon(FN, "message-square", "custom", props);
}


export function FeatherMicOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-mic-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={1} y1={1} x2={23} y2={23} />
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
            <line x1={12} y1={19} x2={12} y2={23} />
            <line x1={8} y1={23} x2={16} y2={23} />
        </svg>
    );
    return convertIcon(FN, "mic-off", "custom", props);
}


export function FeatherMic(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-mic cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1={12} y1={19} x2={12} y2={23} />
            <line x1={8} y1={23} x2={16} y2={23} />
        </svg>
    );
    return convertIcon(FN, "mic", "custom", props);
}


export function FeatherMinimize2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-minimize-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1={14} y1={10} x2={21} y2={3} />
            <line x1={3} y1={21} x2={10} y2={14} />
        </svg>
    );
    return convertIcon(FN, "minimize-2", "custom", props);
}


export function FeatherMinimize(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-minimize cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
        </svg>
    );
    return convertIcon(FN, "minimize", "custom", props);
}


export function FeatherMinusCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-minus-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "minus-circle", "custom", props);
}


export function FeatherMinusSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-minus-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "minus-square", "custom", props);
}


export function FeatherMinus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-minus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={5} y1={12} x2={19} y2={12} />
        </svg>
    );
    return convertIcon(FN, "minus", "custom", props);
}


export function FeatherMonitor(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-monitor cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
            <line x1={8} y1={21} x2={16} y2={21} />
            <line x1={12} y1={17} x2={12} y2={21} />
        </svg>
    );
    return convertIcon(FN, "monitor", "custom", props);
}


export function FeatherMoon(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-moon cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
    return convertIcon(FN, "moon", "custom", props);
}


export function FeatherMoreHorizontal(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-more-horizontal cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={1} />
            <circle cx={19} cy={12} r={1} />
            <circle cx={5} cy={12} r={1} />
        </svg>
    );
    return convertIcon(FN, "more-horizontal", "custom", props);
}


export function FeatherMoreVertical(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-more-vertical cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={1} />
            <circle cx={12} cy={5} r={1} />
            <circle cx={12} cy={19} r={1} />
        </svg>
    );
    return convertIcon(FN, "more-vertical", "custom", props);
}


export function FeatherMousePointer(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-mouse-pointer cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="M13 13l6 6" />
        </svg>
    );
    return convertIcon(FN, "mouse-pointer", "custom", props);
}


export function FeatherMove(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-move cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="5 9 2 12 5 15" />
            <polyline points="9 5 12 2 15 5" />
            <polyline points="15 19 12 22 9 19" />
            <polyline points="19 9 22 12 19 15" />
            <line x1={2} y1={12} x2={22} y2={12} />
            <line x1={12} y1={2} x2={12} y2={22} />
        </svg>
    );
    return convertIcon(FN, "move", "custom", props);
}


export function FeatherMusic(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-music cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx={6} cy={18} r={3} />
            <circle cx={18} cy={16} r={3} />
        </svg>
    );
    return convertIcon(FN, "music", "custom", props);
}


export function FeatherNavigation2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-navigation-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="12 2 19 21 12 17 5 21 12 2" />
        </svg>
    );
    return convertIcon(FN, "navigation-2", "custom", props);
}


export function FeatherNavigation(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-navigation cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
    );
    return convertIcon(FN, "navigation", "custom", props);
}


export function FeatherOctagon(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-octagon cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
        </svg>
    );
    return convertIcon(FN, "octagon", "custom", props);
}


export function FeatherPackage(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-package cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={16.5} y1={9.4} x2={7.5} y2={4.21} />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1={12} y1={22.08} x2={12} y2={12} />
        </svg>
    );
    return convertIcon(FN, "package", "custom", props);
}


export function FeatherPaperclip(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-paperclip cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
    return convertIcon(FN, "paperclip", "custom", props);
}


export function FeatherPauseCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-pause-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={10} y1={15} x2={10} y2={9} />
            <line x1={14} y1={15} x2={14} y2={9} />
        </svg>
    );
    return convertIcon(FN, "pause-circle", "custom", props);
}


export function FeatherPause(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-pause cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={6} y={4} width={4} height={16} />
            <rect x={14} y={4} width={4} height={16} />
        </svg>
    );
    return convertIcon(FN, "pause", "custom", props);
}


export function FeatherPenTool(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-pen-tool cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx={11} cy={11} r={2} />
        </svg>
    );
    return convertIcon(FN, "pen-tool", "custom", props);
}


export function FeatherPercent(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-percent cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={19} y1={5} x2={5} y2={19} />
            <circle cx={6.5} cy={6.5} r={2.5} />
            <circle cx={17.5} cy={17.5} r={2.5} />
        </svg>
    );
    return convertIcon(FN, "percent", "custom", props);
}


export function FeatherPhoneCall(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-call cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone-call", "custom", props);
}


export function FeatherPhoneForwarded(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-forwarded cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="19 1 23 5 19 9" />
            <line x1={15} y1={5} x2={23} y2={5} />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone-forwarded", "custom", props);
}


export function FeatherPhoneIncoming(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-incoming cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="16 2 16 8 22 8" />
            <line x1={23} y1={1} x2={16} y2={8} />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone-incoming", "custom", props);
}


export function FeatherPhoneMissed(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-missed cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={23} y1={1} x2={17} y2={7} />
            <line x1={17} y1={1} x2={23} y2={7} />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone-missed", "custom", props);
}


export function FeatherPhoneOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
            <line x1={23} y1={1} x2={1} y2={23} />
        </svg>
    );
    return convertIcon(FN, "phone-off", "custom", props);
}


export function FeatherPhoneOutgoing(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone-outgoing cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="23 7 23 1 17 1" />
            <line x1={16} y1={8} x2={23} y2={1} />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone-outgoing", "custom", props);
}


export function FeatherPhone(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-phone cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
    return convertIcon(FN, "phone", "custom", props);
}


export function FeatherPieChart(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-pie-chart cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
    );
    return convertIcon(FN, "pie-chart", "custom", props);
}


export function FeatherPlayCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-play-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
    );
    return convertIcon(FN, "play-circle", "custom", props);
}


export function FeatherPlay(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-play cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    );
    return convertIcon(FN, "play", "custom", props);
}


export function FeatherPlusCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-plus-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={8} x2={12} y2={16} />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "plus-circle", "custom", props);
}


export function FeatherPlusSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-plus-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={12} y1={8} x2={12} y2={16} />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    );
    return convertIcon(FN, "plus-square", "custom", props);
}


export function FeatherPlus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-plus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={12} y1={5} x2={12} y2={19} />
            <line x1={5} y1={12} x2={19} y2={12} />
        </svg>
    );
    return convertIcon(FN, "plus", "custom", props);
}


export function FeatherPocket(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-pocket cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
            <polyline points="8 10 12 14 16 10" />
        </svg>
    );
    return convertIcon(FN, "pocket", "custom", props);
}


export function FeatherPower(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-power cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1={12} y1={2} x2={12} y2={12} />
        </svg>
    );
    return convertIcon(FN, "power", "custom", props);
}


export function FeatherPrinter(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-printer cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x={6} y={14} width={12} height={8} />
        </svg>
    );
    return convertIcon(FN, "printer", "custom", props);
}


export function FeatherRadio(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-radio cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={2} />
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
    );
    return convertIcon(FN, "radio", "custom", props);
}


export function FeatherRefreshCcw(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-refresh-ccw cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
    );
    return convertIcon(FN, "refresh-ccw", "custom", props);
}


export function FeatherRefreshCw(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-refresh-cw cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
    );
    return convertIcon(FN, "refresh-cw", "custom", props);
}


export function FeatherRepeat(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-repeat cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
    );
    return convertIcon(FN, "repeat", "custom", props);
}


export function FeatherRewind(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-rewind cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="11 19 2 12 11 5 11 19" />
            <polygon points="22 19 13 12 22 5 22 19" />
        </svg>
    );
    return convertIcon(FN, "rewind", "custom", props);
}


export function FeatherRotateCcw(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-rotate-ccw cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
    );
    return convertIcon(FN, "rotate-ccw", "custom", props);
}


export function FeatherRotateCw(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-rotate-cw cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
    );
    return convertIcon(FN, "rotate-cw", "custom", props);
}


export function FeatherRss(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-rss cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx={5} cy={19} r={1} />
        </svg>
    );
    return convertIcon(FN, "rss", "custom", props);
}


export function FeatherSave(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-save cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
        </svg>
    );
    return convertIcon(FN, "save", "custom", props);
}


export function FeatherScissors(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-scissors cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={6} cy={6} r={3} />
            <circle cx={6} cy={18} r={3} />
            <line x1={20} y1={4} x2={8.12} y2={15.88} />
            <line x1={14.47} y1={14.48} x2={20} y2={20} />
            <line x1={8.12} y1={8.12} x2={12} y2={12} />
        </svg>
    );
    return convertIcon(FN, "scissors", "custom", props);
}


export function FeatherSearch(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-search cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
        </svg>
    );
    return convertIcon(FN, "search", "custom", props);
}


export function FeatherSend(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-send cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={22} y1={2} x2={11} y2={13} />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
    return convertIcon(FN, "send", "custom", props);
}


export function FeatherServer(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-server cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
            <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
            <line x1={6} y1={6} x2={6.01} y2={6} />
            <line x1={6} y1={18} x2={6.01} y2={18} />
        </svg>
    );
    return convertIcon(FN, "server", "custom", props);
}


export function FeatherSettings(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-settings cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={3} />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    );
    return convertIcon(FN, "settings", "custom", props);
}


export function FeatherShare2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-share-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={18} cy={5} r={3} />
            <circle cx={6} cy={12} r={3} />
            <circle cx={18} cy={19} r={3} />
            <line x1={8.59} y1={13.51} x2={15.42} y2={17.49} />
            <line x1={15.41} y1={6.51} x2={8.59} y2={10.49} />
        </svg>
    );
    return convertIcon(FN, "share-2", "custom", props);
}


export function FeatherShare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-share cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1={12} y1={2} x2={12} y2={15} />
        </svg>
    );
    return convertIcon(FN, "share", "custom", props);
}


export function FeatherShieldOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-shield-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
            <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "shield-off", "custom", props);
}


export function FeatherShield(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-shield cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
    return convertIcon(FN, "shield", "custom", props);
}


export function FeatherShoppingBag(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-shopping-bag cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1={3} y1={6} x2={21} y2={6} />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    );
    return convertIcon(FN, "shopping-bag", "custom", props);
}


export function FeatherShoppingCart(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-shopping-cart cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={9} cy={21} r={1} />
            <circle cx={20} cy={21} r={1} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
    );
    return convertIcon(FN, "shopping-cart", "custom", props);
}


export function FeatherShuffle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-shuffle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="16 3 21 3 21 8" />
            <line x1={4} y1={20} x2={21} y2={3} />
            <polyline points="21 16 21 21 16 21" />
            <line x1={15} y1={15} x2={21} y2={21} />
            <line x1={4} y1={4} x2={9} y2={9} />
        </svg>
    );
    return convertIcon(FN, "shuffle", "custom", props);
}


export function FeatherSidebar(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-sidebar cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={9} y1={3} x2={9} y2={21} />
        </svg>
    );
    return convertIcon(FN, "sidebar", "custom", props);
}


export function FeatherSkipBack(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-skip-back cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1={5} y1={19} x2={5} y2={5} />
        </svg>
    );
    return convertIcon(FN, "skip-back", "custom", props);
}


export function FeatherSkipForward(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-skip-forward cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1={19} y1={5} x2={19} y2={19} />
        </svg>
    );
    return convertIcon(FN, "skip-forward", "custom", props);
}


export function FeatherSlack(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-slack cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
            <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
            <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
            <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
            <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
            <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
            <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
        </svg>
    );
    return convertIcon(FN, "slack", "custom", props);
}


export function FeatherSlash(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-slash cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={4.93} y1={4.93} x2={19.07} y2={19.07} />
        </svg>
    );
    return convertIcon(FN, "slash", "custom", props);
}


export function FeatherSliders(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-sliders cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={4} y1={21} x2={4} y2={14} />
            <line x1={4} y1={10} x2={4} y2={3} />
            <line x1={12} y1={21} x2={12} y2={12} />
            <line x1={12} y1={8} x2={12} y2={3} />
            <line x1={20} y1={21} x2={20} y2={16} />
            <line x1={20} y1={12} x2={20} y2={3} />
            <line x1={1} y1={14} x2={7} y2={14} />
            <line x1={9} y1={8} x2={15} y2={8} />
            <line x1={17} y1={16} x2={23} y2={16} />
        </svg>
    );
    return convertIcon(FN, "sliders", "custom", props);
}


export function FeatherSmartphone(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-smartphone cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
            <line x1={12} y1={18} x2={12.01} y2={18} />
        </svg>
    );
    return convertIcon(FN, "smartphone", "custom", props);
}


export function FeatherSmile(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-smile cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1={9} y1={9} x2={9.01} y2={9} />
            <line x1={15} y1={9} x2={15.01} y2={9} />
        </svg>
    );
    return convertIcon(FN, "smile", "custom", props);
}


export function FeatherSpeaker(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-speaker cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
            <circle cx={12} cy={14} r={4} />
            <line x1={12} y1={6} x2={12.01} y2={6} />
        </svg>
    );
    return convertIcon(FN, "speaker", "custom", props);
}


export function FeatherSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
        </svg>
    );
    return convertIcon(FN, "square", "custom", props);
}


export function FeatherStar(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-star cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
    return convertIcon(FN, "star", "custom", props);
}


export function FeatherStopCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-stop-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <rect x={9} y={9} width={6} height={6} />
        </svg>
    );
    return convertIcon(FN, "stop-circle", "custom", props);
}


export function FeatherSun(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-sun cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={5} />
            <line x1={12} y1={1} x2={12} y2={3} />
            <line x1={12} y1={21} x2={12} y2={23} />
            <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
            <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
            <line x1={1} y1={12} x2={3} y2={12} />
            <line x1={21} y1={12} x2={23} y2={12} />
            <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
            <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
        </svg>
    );
    return convertIcon(FN, "sun", "custom", props);
}


export function FeatherSunrise(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-sunrise cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M17 18a5 5 0 0 0-10 0" />
            <line x1={12} y1={2} x2={12} y2={9} />
            <line x1={4.22} y1={10.22} x2={5.64} y2={11.64} />
            <line x1={1} y1={18} x2={3} y2={18} />
            <line x1={21} y1={18} x2={23} y2={18} />
            <line x1={18.36} y1={11.64} x2={19.78} y2={10.22} />
            <line x1={23} y1={22} x2={1} y2={22} />
            <polyline points="8 6 12 2 16 6" />
        </svg>
    );
    return convertIcon(FN, "sunrise", "custom", props);
}


export function FeatherSunset(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-sunset cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M17 18a5 5 0 0 0-10 0" />
            <line x1={12} y1={9} x2={12} y2={2} />
            <line x1={4.22} y1={10.22} x2={5.64} y2={11.64} />
            <line x1={1} y1={18} x2={3} y2={18} />
            <line x1={21} y1={18} x2={23} y2={18} />
            <line x1={18.36} y1={11.64} x2={19.78} y2={10.22} />
            <line x1={23} y1={22} x2={1} y2={22} />
            <polyline points="16 5 12 9 8 5" />
        </svg>
    );
    return convertIcon(FN, "sunset", "custom", props);
}


export function FeatherTable(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-table cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
        </svg>
    );
    return convertIcon(FN, "table", "custom", props);
}


export function FeatherTablet(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-tablet cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
            <line x1={12} y1={18} x2={12.01} y2={18} />
        </svg>
    );
    return convertIcon(FN, "tablet", "custom", props);
}


export function FeatherTag(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-tag cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1={7} y1={7} x2={7.01} y2={7} />
        </svg>
    );
    return convertIcon(FN, "tag", "custom", props);
}


export function FeatherTarget(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-target cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={6} />
            <circle cx={12} cy={12} r={2} />
        </svg>
    );
    return convertIcon(FN, "target", "custom", props);
}


export function FeatherTerminal(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-terminal cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1={12} y1={19} x2={20} y2={19} />
        </svg>
    );
    return convertIcon(FN, "terminal", "custom", props);
}


export function FeatherThermometer(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-thermometer cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
    );
    return convertIcon(FN, "thermometer", "custom", props);
}


export function FeatherThumbsDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-thumbs-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
        </svg>
    );
    return convertIcon(FN, "thumbs-down", "custom", props);
}


export function FeatherThumbsUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-thumbs-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
    );
    return convertIcon(FN, "thumbs-up", "custom", props);
}


export function FeatherToggleLeft(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-toggle-left cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
            <circle cx={8} cy={12} r={3} />
        </svg>
    );
    return convertIcon(FN, "toggle-left", "custom", props);
}


export function FeatherToggleRight(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-toggle-right cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
            <circle cx={16} cy={12} r={3} />
        </svg>
    );
    return convertIcon(FN, "toggle-right", "custom", props);
}


export function FeatherTool(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-tool cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
    return convertIcon(FN, "tool", "custom", props);
}


export function FeatherTrash2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-trash-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1={10} y1={11} x2={10} y2={17} />
            <line x1={14} y1={11} x2={14} y2={17} />
        </svg>
    );
    return convertIcon(FN, "trash-2", "custom", props);
}


export function FeatherTrash(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-trash cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    );
    return convertIcon(FN, "trash", "custom", props);
}


export function FeatherTrello(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-trello cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <rect x={7} y={7} width={3} height={9} />
            <rect x={14} y={7} width={3} height={5} />
        </svg>
    );
    return convertIcon(FN, "trello", "custom", props);
}


export function FeatherTrendingDown(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-trending-down cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
            <polyline points="17 18 23 18 23 12" />
        </svg>
    );
    return convertIcon(FN, "trending-down", "custom", props);
}


export function FeatherTrendingUp(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-trending-up cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    );
    return convertIcon(FN, "trending-up", "custom", props);
}


export function FeatherTriangle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-triangle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
    );
    return convertIcon(FN, "triangle", "custom", props);
}


export function FeatherTruck(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-truck cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={1} y={3} width={15} height={13} />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx={5.5} cy={18.5} r={2.5} />
            <circle cx={18.5} cy={18.5} r={2.5} />
        </svg>
    );
    return convertIcon(FN, "truck", "custom", props);
}


export function FeatherTv(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-tv cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
            <polyline points="17 2 12 7 7 2" />
        </svg>
    );
    return convertIcon(FN, "tv", "custom", props);
}


export function FeatherTwitch(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-twitch cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
        </svg>
    );
    return convertIcon(FN, "twitch", "custom", props);
}


export function FeatherTwitter(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-twitter cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
    );
    return convertIcon(FN, "twitter", "custom", props);
}


export function FeatherType(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-type cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1={9} y1={20} x2={15} y2={20} />
            <line x1={12} y1={4} x2={12} y2={20} />
        </svg>
    );
    return convertIcon(FN, "type", "custom", props);
}


export function FeatherUmbrella(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-umbrella cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
        </svg>
    );
    return convertIcon(FN, "umbrella", "custom", props);
}


export function FeatherUnderline(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-underline cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
            <line x1={4} y1={21} x2={20} y2={21} />
        </svg>
    );
    return convertIcon(FN, "underline", "custom", props);
}


export function FeatherUnlock(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-unlock cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
    );
    return convertIcon(FN, "unlock", "custom", props);
}


export function FeatherUploadCloud(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-upload-cloud cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="16 16 12 12 8 16" />
            <line x1={12} y1={12} x2={12} y2={21} />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            <polyline points="16 16 12 12 8 16" />
        </svg>
    );
    return convertIcon(FN, "upload-cloud", "custom", props);
}


export function FeatherUpload(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-upload cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1={12} y1={3} x2={12} y2={15} />
        </svg>
    );
    return convertIcon(FN, "upload", "custom", props);
}


export function FeatherUserCheck(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-user-check cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={8.5} cy={7} r={4} />
            <polyline points="17 11 19 13 23 9" />
        </svg>
    );
    return convertIcon(FN, "user-check", "custom", props);
}


export function FeatherUserMinus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-user-minus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={8.5} cy={7} r={4} />
            <line x1={23} y1={11} x2={17} y2={11} />
        </svg>
    );
    return convertIcon(FN, "user-minus", "custom", props);
}


export function FeatherUserPlus(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-user-plus cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={8.5} cy={7} r={4} />
            <line x1={20} y1={8} x2={20} y2={14} />
            <line x1={23} y1={11} x2={17} y2={11} />
        </svg>
    );
    return convertIcon(FN, "user-plus", "custom", props);
}


export function FeatherUserX(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-user-x cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={8.5} cy={7} r={4} />
            <line x1={18} y1={8} x2={23} y2={13} />
            <line x1={23} y1={8} x2={18} y2={13} />
        </svg>
    );
    return convertIcon(FN, "user-x", "custom", props);
}


export function FeatherUser(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-user cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx={12} cy={7} r={4} />
        </svg>
    );
    return convertIcon(FN, "user", "custom", props);
}


export function FeatherUsers(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-users cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
    return convertIcon(FN, "users", "custom", props);
}


export function FeatherVideoOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-video-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "video-off", "custom", props);
}


export function FeatherVideo(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-video cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
        </svg>
    );
    return convertIcon(FN, "video", "custom", props);
}


export function FeatherVoicemail(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-voicemail cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={5.5} cy={11.5} r={4.5} />
            <circle cx={18.5} cy={11.5} r={4.5} />
            <line x1={5.5} y1={16} x2={18.5} y2={16} />
        </svg>
    );
    return convertIcon(FN, "voicemail", "custom", props);
}


export function FeatherVolume1(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-volume-1 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
    );
    return convertIcon(FN, "volume-1", "custom", props);
}


export function FeatherVolume2(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-volume-2 cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
    );
    return convertIcon(FN, "volume-2", "custom", props);
}


export function FeatherVolumeX(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-volume-x cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1={23} y1={9} x2={17} y2={15} />
            <line x1={17} y1={9} x2={23} y2={15} />
        </svg>
    );
    return convertIcon(FN, "volume-x", "custom", props);
}


export function FeatherVolume(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-volume cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        </svg>
    );
    return convertIcon(FN, "volume", "custom", props);
}


export function FeatherWatch(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-watch cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={7} />
            <polyline points="12 9 12 12 13.5 13.5" />
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
    );
    return convertIcon(FN, "watch", "custom", props);
}


export function FeatherWifiOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-wifi-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={1} y1={1} x2={23} y2={23} />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1={12} y1={20} x2={12.01} y2={20} />
        </svg>
    );
    return convertIcon(FN, "wifi-off", "custom", props);
}


export function FeatherWifi(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-wifi cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1={12} y1={20} x2={12.01} y2={20} />
        </svg>
    );
    return convertIcon(FN, "wifi", "custom", props);
}


export function FeatherWind(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-wind cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
    );
    return convertIcon(FN, "wind", "custom", props);
}


export function FeatherXCircle(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-x-circle cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <line x1={15} y1={9} x2={9} y2={15} />
            <line x1={9} y1={9} x2={15} y2={15} />
        </svg>
    );
    return convertIcon(FN, "x-circle", "custom", props);
}


export function FeatherXOctagon(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-x-octagon cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
            <line x1={15} y1={9} x2={9} y2={15} />
            <line x1={9} y1={9} x2={15} y2={15} />
        </svg>
    );
    return convertIcon(FN, "x-octagon", "custom", props);
}


export function FeatherXSquare(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-x-square cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
            <line x1={9} y1={9} x2={15} y2={15} />
            <line x1={15} y1={9} x2={9} y2={15} />
        </svg>
    );
    return convertIcon(FN, "x-square", "custom", props);
}


export function FeatherX(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-x cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
    );
    return convertIcon(FN, "x", "custom", props);
}


export function FeatherYoutube(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-youtube cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
    );
    return convertIcon(FN, "youtube", "custom", props);
}


export function FeatherZapOff(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-zap-off cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polyline points="12.41 6.75 13 2 10.57 4.92" />
            <polyline points="18.57 12.91 21 10 15.66 10" />
            <polyline points="8 8 3 14 12 14 11 22 16 16" />
            <line x1={1} y1={1} x2={23} y2={23} />
        </svg>
    );
    return convertIcon(FN, "zap-off", "custom", props);
}


export function FeatherZap(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-zap cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    );
    return convertIcon(FN, "zap", "custom", props);
}


export function FeatherZoomIn(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-zoom-in cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
            <line x1={11} y1={8} x2={11} y2={14} />
            <line x1={8} y1={11} x2={14} y2={11} />
        </svg>
    );
    return convertIcon(FN, "zoom-in", "custom", props);
}


export function FeatherZoomOut(props: IconProps) {
    const FN = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="cui-icon-zoom-out cui-icon-custom cui-icon-feather"
            stroke-width={2}
            {...props}
        >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
            <line x1={8} y1={11} x2={14} y2={11} />
        </svg>
    );
    return convertIcon(FN, "zoom-out", "custom", props);
}


