import { Button, Dropdown, DropdownItem, DropdownMenu, Icon, Space, Text } from "cui-solid"
import { createSignal } from "solid-js";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <Space dir="h">
        <Dropdown align="bottomLeft" trigger="click" menu={<DropdownMenu>
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
            <Text>点击显示</Text>
        </Dropdown>



        <Dropdown align="bottomLeft" trigger="contextMenu" menu={<DropdownMenu>
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
            <Text>右键菜单</Text>
        </Dropdown>


        <Dropdown trigger="custom" align="bottom"
            visible={[visible, setVisible]}
            menu={<div style={{width: '150px', padding: '20px', background: '#fff'}}>
                <div>dropdown内容</div>
                <Button type="primary" onClick={() => {
                    setVisible(false)
                }}>关闭</Button>
            </div>} onSelect={(name: string) => {
                console.log(name);
            }}>
            <Text>自定义菜单</Text>
        </Dropdown>
    </Space>
}
