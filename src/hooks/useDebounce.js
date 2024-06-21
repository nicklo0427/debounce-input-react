import { useRef, useCallback } from "react";

export default function useDebounce(callback, delay) {
    // 避免每次渲染都創建定時
    const timeoutRef = useRef(null);

    const debounceCallback = useCallback((...args) => {
               
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
    return debounceCallback;
}
