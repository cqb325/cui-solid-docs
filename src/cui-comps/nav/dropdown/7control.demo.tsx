import { Dropdown, DropdownItem, DropdownMenu, Icon, Text, Space, Button } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <div>
        <Dropdown align="bottomLeft" trigger="custom" visible={[visible, setVisible]} menu={<DropdownMenu>
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
            <Text>可控菜单</Text>
        </Dropdown>

        <span style={{ 'margin-left': "50px" }}>
            <Button onClick={() => {
                setVisible(!visible())
            }}>显示/隐藏</Button>
        </span>
    </div>
}
