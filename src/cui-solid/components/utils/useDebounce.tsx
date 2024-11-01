export function useDebounce(func: Function, delay: number) {
    let timer: any = null;

    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        const args = arguments;
        timer = setTimeout(() => {
            timer = null;
            func?.(...args);
        }, delay);
    }
}
