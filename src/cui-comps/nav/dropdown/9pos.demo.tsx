import { Dropdown, DropdownItem, DropdownMenu, Icon, Text } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [x, setX] = createSignal(0);
    const [y, setY] = createSignal(0);
    return <div>
        <div class="context-area" style={{width: '300px', height: '400px', background: '#f0f0f0'}}></div>
        <Dropdown gradient={['45deg', '#9B59B6', '#3498DB']}
            color="#ffffff"
            align="bottomLeft" trigger="contextMenu" handler=".context-area"
            onMouseClick={(e) => {
                setX(e.pageX);
                setY(e.pageY);
            }}
            position={{x: x(), y: y()}}
            transfer
            menu={<DropdownMenu>
            <DropdownItem icon={<Icon name="edit"/>} arrow>Edit
                <DropdownMenu>
                    <DropdownItem>Color</DropdownItem>
                    <DropdownItem>Size</DropdownItem>
                </DropdownMenu>
            </DropdownItem>
            <DropdownItem icon={<Icon name="cart"/>}>Add to Cart</DropdownItem>
            <DropdownItem disabled icon={<Icon name="heart"/>}>Save to Wishlist</DropdownItem>
            <DropdownItem divided arrow icon={<Icon name="share-2"/>}>Share
                <DropdownMenu>
                    <DropdownItem>微信</DropdownItem>
                    <DropdownItem>微博</DropdownItem>
                    <DropdownItem>短视频</DropdownItem>
                </DropdownMenu>
            </DropdownItem>
            <DropdownItem icon={<Icon name="copy"/>}>Copy link</DropdownItem>
            <DropdownItem divided icon={<Icon name="image"/>}>View image</DropdownItem>
            <DropdownItem icon={<Icon name="cog"/>}>Settings</DropdownItem>
        </DropdownMenu>} onSelect={(name: string) => {
            console.log(name);
        }}>
            <div></div>
        </Dropdown>
    </div>
}
