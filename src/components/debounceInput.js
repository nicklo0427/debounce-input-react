import { useState, useCallback, useRef } from "react";

export default function DebounceInput({ onChange, delay }) {
	const timeID = useRef(null);

	  const fetchPokemon = useCallback((name) => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((response) => response.json())
		.then((data) => onChange(data))
		.catch((error) => console.error(error));
	}, []);
	const handleChange = (v) => {
		clearInterval(timeID.current);
		timeID.current = setTimeout(() => {
			fetchPokemon(v)
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
