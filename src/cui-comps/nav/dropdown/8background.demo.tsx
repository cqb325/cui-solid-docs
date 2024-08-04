import { Dropdown, DropdownItem, DropdownMenu, Icon, Text } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {

    return <div>
        <Dropdown align="bottomLeft" trigger="click" gradient={['45deg', '#9B59B6', '#3498DB']}
            color="#ffffff" menu={<DropdownMenu>
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
            <Text>点击显示带背景的菜单</Text>
        </Dropdown>
    </div>
}
