import { Dropdown, DropdownItem, DropdownMenu, Button, Link } from "cui-solid"
import { createSignal } from "solid-js";
import { F7Cart, F7DocOnDoc, F7GearAlt, F7Heart, F7Photo, F7SquarePencil } from "cui-solid-icons/f7";
import { FeatherShare } from "cui-solid-icons/feather";

export default () => {
    const [visible, setVisible] = createSignal(false);
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
        <Dropdown align="bottomLeft" trigger="custom" visible={[visible, setVisible]} menu={menu()}>
            <Link>可控菜单</Link>
        </Dropdown>

        <span style={{ 'margin-left': "50px" }}>
            <Button onClick={() => {
                setVisible(!visible())
            }}>显示/隐藏</Button>
        </span>
    </div>
}
