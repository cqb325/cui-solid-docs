import { Dropdown, DropdownItem, DropdownMenu } from "cui-solid"
import { createSignal } from "solid-js";
import { F7Cart, F7DocOnDoc, F7GearAlt, F7Heart, F7Photo, F7SquarePencil } from "cui-solid-icons/f7";
import { FeatherShare } from "cui-solid-icons/feather";

export default () => {
    const [x, setX] = createSignal(0);
    const [y, setY] = createSignal(0);
    const menu = () => <DropdownMenu>
        <DropdownItem name="edit" icon={<F7SquarePencil />} arrow>Edit
            <DropdownMenu>
                <DropdownItem name="color">Color</DropdownItem>
                <DropdownItem name="size">Size</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
        <DropdownItem icon={<F7Cart />}>Add to Cart</DropdownItem>
        <DropdownItem disabled icon={<F7Heart />}>Save to Wishlist</DropdownItem>
        <DropdownItem divided arrow icon={<FeatherShare />}>Share
            <DropdownMenu>
                <DropdownItem>微信</DropdownItem>
                <DropdownItem>微博</DropdownItem>
                <DropdownItem>短视频</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
        <DropdownItem icon={<F7DocOnDoc />}>Copy link</DropdownItem>
        <DropdownItem divided icon={<F7Photo />}>View image</DropdownItem>
        <DropdownItem icon={<F7GearAlt />}>Settings</DropdownItem>
    </DropdownMenu>
    return <div>
        <Dropdown gradient={['45deg', '#9B59B6', '#3498DB']}
            color="#ffffff"
            align="bottomLeft" trigger="contextMenu" handler=".context-area"
            onMouseClick={(e) => {
                setX(e.pageX);
                setY(e.pageY);
            }}
            position={{x: x(), y: y()}}
            transfer
            menu={menu()} onSelect={(name: string) => {
            console.log(name);
        }}>
            <div class="context-area" style={{width: '300px', height: '400px', background: '#f0f0f0'}}></div>
        </Dropdown>
    </div>
}
