import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [state, setState] = createStore({
    list: []
});

export const clearDemos = () => {
    console.log('clearDemos');
    setState('list', []);
}

export const addDemo = (demo: any) => {
    setState('list', state.list.length, demo);
}

export const store = state;
