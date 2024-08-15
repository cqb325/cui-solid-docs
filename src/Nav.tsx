import { createSignal, For, Match, onMount, Switch } from "solid-js";
import { Menu, MenuItem, SubMenu } from "./cui-solid/components/Menu";
import { menuData } from "./menuData";
import { useNavigate, useCurrentMatches } from "@solidjs/router";
import { MetaProvider, Title } from "@solidjs/meta";

const menuMap: any = {};
function buildPath (arr: any[], parentPath: string) {
    arr.forEach(item => {
        item.to = item.to || (parentPath + (item.path.startsWith('/') ? '' : '/') + item.path);
        menuMap[item.to] = item;
        if (item.children?.length) {
            buildPath(item.children, item.to);
        }
    })
}

buildPath(menuData, '');

export default function Nav(props: any) {
    const [activeName, setActiveName] = createSignal<any>('');
    const [title, setTitle] = createSignal<any>('');
    const navigate = useNavigate()
    onMount(() => {
        const match = useCurrentMatches();
        const pathName = match()[0].path;
        setTimeout(() => {
            setActiveName(menuMap[pathName].name);
        });
    })

    return <MetaProvider>
        <Title>{title()}</Title>
        <Menu activeName={[activeName, setActiveName]} accordion onSelect={(name: string, data: any) => {
            navigate(data.to);
            setTitle(`CUI-Solid-${data.title}`);
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
                                        return <MenuItem name={aItem.name} data={aItem}>
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
    </MetaProvider>
}
