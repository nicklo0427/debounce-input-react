import { useState, useEffect, useCallback } from "react";
import useDebounce from "./hooks/useDebounce";
export default function App() {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = useCallback((name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  }, []);

  const debounceCatchPokemon = useDebounce(fetchPokemon, 300);
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    debounceCatchPokemon(value)
  }

  return <>
    <input
      type="text"
      onChange={handleInputChange}
    />
    <pre>
      {JSON.stringify(pokemon, null, 2)}
    </pre>
  </>;
}

