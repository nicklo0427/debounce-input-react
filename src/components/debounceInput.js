import { useEffect, useRef, useState } from "react";

export default function DebounceInput({ onChange, value, delay }) {
	const timeID = useRef(null);
	const [val, setVal] = useState(value);

	useEffect(() => {
		timeID.current = setTimeout(() => {
			onChange(val)
		}, delay);
		return () => {
			clearTimeout(timeID.current);
		};
	}, [val, onChange, delay]);

	const handleChange = (val) => {
		setVal(val);
		
	};
    return (
        <input
            type="text"
			value={val}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="請輸入..."
        />
    );
}
