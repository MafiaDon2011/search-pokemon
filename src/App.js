import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {console.log(response)})
  }

  return (
    <>
      <div class="header">
        <div><img src="../assets/pokemon-icon.png"></img></div>
        <h1>Pokemon Pokidex</h1>
        <input type="text" onChange={(event) => { setPokemonName(event.target.value) }} />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </>
  );
}

export default App;
