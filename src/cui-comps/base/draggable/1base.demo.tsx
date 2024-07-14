import { Draggable } from "cui-solid"

export default () => {
    return <div style={{height: '200px', position: 'relative'}}>
        <Draggable>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}}>
                <div style={{height: '30px'}} class="drag-handler">Handler</div>
            </div>
        </Draggable>
    </div>
}