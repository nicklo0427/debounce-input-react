import { useRef, useCallback } from "react";

export default function useDebounce(callback, delay) {
    // 避免每次渲染都創建定時
    const timeoutRef = useRef(null);

    const debounceCallback = useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
        // 只有在callback或delay改變時才重新創建定时器
    }, [callback, delay]);
    return debounceCallback;
}
