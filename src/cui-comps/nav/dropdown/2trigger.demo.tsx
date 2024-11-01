import { Button, Dropdown, DropdownItem, DropdownMenu, Link, Space, Text } from "cui-solid"
import { createSignal } from "solid-js";
import { F7Cart, F7DocOnDoc, F7GearAlt, F7Heart, F7Photo, F7SquarePencil } from "cui-solid-icons/f7";
import { FeatherShare } from "cui-solid-icons/feather";

export default () => {
    const [visible, setVisible] = createSignal(false);

    return <Space dir="h">
        <Dropdown align="bottomLeft" trigger="click" menu={<DropdownMenu>
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
        </DropdownMenu>} onSelect={(name: string) => {
            console.log(name);
        }}>
            <Link>点击显示</Link>
        </Dropdown>



        <Dropdown align="bottomLeft" trigger="contextMenu" menu={<DropdownMenu>
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
        </DropdownMenu>} onSelect={(name: string) => {
            console.log(name);
        }}>
            <Link>右键菜单</Link>
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
            <Link>自定义菜单</Link>
        </Dropdown>
    </Space>
}
