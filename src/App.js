import { useState, useEffect } from "react";
// import useDebounce from "./hooks/useDebounce";
import DebounceInput from "./components/debounceInput";
export default function App() {
  const [pokemon, setPokemon] = useState("");
  const [name, setName] = useState("");
  const handleDataFromChild = (value) => {
    // fetchPokemon(value)
    setName(value);
  }

  useEffect(() => {
    if (!name) setPokemon("");
    else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
    }
  }, [name]);
	// const fetchPokemon = useCallback((name) => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   .then((response) => response.json())
  //   .then((data) => setPokemon(data))
  //   .catch((error) => console.error(error));
	// }, []);

  return <>
    <DebounceInput
      value={name}
      delay={300}
      onChange={handleDataFromChild}
     />
    <pre>
      {JSON.stringify(pokemon, null, 2)}
    </pre>
  </>;
}

