import { Paragraph, Tooltip } from "cui-solid"

export default () => {
    return <Tooltip content={<div>
        <p>风吹柳花满店香，吴姬压酒唤客尝。</p>
        <p>金陵子弟来相送，欲行不行各尽觞。</p>
        <p>请君试问东流水，别意与之谁短长？</p>
    </div>}>
        <span>show tips</span>
    </Tooltip>
}
