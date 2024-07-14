import { VirtualList } from "cui-virtual-list";

const createArray = (count: number) => {
    return new Array(count).fill(true).map(() => 1 + Math.round(Math.random() * 20))
};

const ListItem = (props: any) : any => {
    const style = {...props.style, height: (30 + props.item) + 'px'}
    return <div
        style={style}
        role="listitem"
        classList={{
            "ListItemOdd": props.index % 2 === 0,
            "ListItemEven": props.index % 2 === 1,
        }}
        ref={props.ref}
    >
        <div>Row {props.index}</div>
    </div>
}

export default () => {
    const data = createArray(1000);
    return <div style={{width: '300px', border: '1px solid #ccc'}}>
        <VirtualList height={300} items={data} itemEstimatedSize={20}>
            {ListItem}
        </VirtualList>
    </div>
}