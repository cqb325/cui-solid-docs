import { createSignal, For, Match, Switch } from "solid-js";
import { Menu, MenuItem, SubMenu } from "./cui-solid/components/Menu";
import { menuData } from "./menuData";
import { useNavigate } from "@solidjs/router";

export default function Nav(props: any) {
    const [activeName, setActiveName] = createSignal<any>('');
    const navigate = useNavigate()

    return <Menu activeName={[activeName, setActiveName]} accordion onSelect={(name: string, data: any) => {
        navigate(data.to);
        // navigate(data.to)
        // router.push({ name });
    }}>
        <For each={menuData}>
            {(item: any) => {
                return <Switch>
                    <Match when={item.type === 'SubMenu'}>
                        <SubMenu title={item.title} name={item.name}>
                            <For each={item.children}>
                                {(aItem: any) => {
                                    aItem.to = item.path + '/' + aItem.path;
                                    return <MenuItem name={aItem.to} data={aItem}>
                                        {aItem.title}
                                    </MenuItem>
                                }}
                            </For>
                        </SubMenu>
                    </Match>
                    <Match when={item.type === 'MenuItem'}>
                        <MenuItem name={item.name} data={item}>
                            {item.title}
                        </MenuItem>
                    </Match>
                </Switch>
            }}
        </For>
    </Menu>
}
