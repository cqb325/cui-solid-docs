import { Tree } from "cui-solid";

export default () => {
    const data = [];
    for (let i = 0; i < 1 + Math.random() * 5; i++) {
        data.push({title: `node_${i}`, id: `${i}`, loading: true});
    }

    return <Tree data={data} checkable directory loadData={(data: any) => {
        return new Promise((resolve) => {
            const d: any = [];
            for (let i = 0; i < 1 + Math.random() * 5; i++) {
                d.push({title: `node_${data.id}_${i}`, id: `${data.id}_${i}`});
            }
            setTimeout(() => {
                resolve(d);
            }, 1000);
        });
    }}/>
}
