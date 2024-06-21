import { useRef } from "react";

export default function DebounceInput({ onChange, value, delay }) {
	const timeID = useRef(null);

	const handleChange = (val) => {
		clearInterval(timeID.current);
		timeID.current = setTimeout(() => {
			onChange(val)
		}, delay);
	};
    return (
        <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="請輸入..."
        />
    );
}
