import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({name: "", species: "", img: "", hp: "", attack: "", defence: "", type: "",});
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => { setPokemon({ name: pokemonName, species: response.data.species.name, img: response.data.sprites.front_default, hp: response.data.stats[0].base_stat, attack: response.data.stats[1].base_stat, defence: response.data.stats[2].base_stat, type: response.data.types[0].type.name,}); setPokemonChosen(true) })
  };

const checkForEnterKey = (event) => {
  if (event.key === 'Enter') {
    searchPokemon()
  }
}

  return (
    <>
      <div class="header">
        <div><img src="../assets/pokemon-icon.png"></img></div>
        <h1>Pokemon Pokidex</h1>
        <input onKeyDown={checkForEnterKey} type="text" onChange={(event) => { setPokemonName(event.target.value) }} />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div class="displaySection">{!pokemonChosen ? (<h1>Please Choose a Pokemon</h1>) : (
      <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} />
      <h3 id="species">Species: {pokemon.species}</h3>
      <h3>Type: {pokemon.type}</h3>
      <h4>HP: {pokemon.hp}</h4>
      <h4>ATTACK: {pokemon.attack}</h4>
      <h4>DEFENCE: {pokemon.defence}</h4>
      </>
      )}
      </div>
      <footer>
            <p>Created by <a title="Go to my portfolio page" href="https://www.renlumfao.com" target="_blank">Wajid Hussain</a></p>
            <p>Version Number: <a href="http://bit.ly/3Cf9KPZ">V1.00</a></p>
      </footer>
    </>
  );
}

export default App;
