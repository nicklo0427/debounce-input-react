import { useRef, useCallback } from "react";

export default function useDebounce(callback, delay) {
    
    const timeoutRef = useRef(null);

    const debounceCallback = useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
    return debounceCallback;
}
