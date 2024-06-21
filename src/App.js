import { useState, useCallback } from "react";
// import useDebounce from "./hooks/useDebounce";
import DebounceInput from "./components/debounceInput";
export default function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleDataFromChild = (value) => {
    fetchPokemon(value)
  }

  
	const fetchPokemon = useCallback((name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => setPokemon(data))
    .catch((error) => console.error(error));
	}, []);

  return <>
    <DebounceInput onChange={handleDataFromChild} delay={300}
     />
    <pre>
      {JSON.stringify(pokemon, null, 2)}
    </pre>
  </>;
}

