import { useState, useCallback } from "react";
// import useDebounce from "./hooks/useDebounce";
import DebounceInput from "./components/debounceInput";
export default function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleDataFromChild = (value) => {
    setPokemon(value)
  }

  return <>
    <DebounceInput onChange={handleDataFromChild} delay={3000} />
    <pre>
      {JSON.stringify(pokemon, null, 2)}
    </pre>
  </>;
}

