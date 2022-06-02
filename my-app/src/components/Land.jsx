import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

/// *pseudo code to help keep track of the code you've written and how it was implemented*

// ** Add comments to console.logs to easily spot your log**

// *** console.log every func and the data you're attempting to pull before moving on. ***

// ****Always comment out or erase console.logs once it has fufilled it's purpose ****

function App() {
  const [pokedex, setPokedex] = useState([]); //holds state of mass data
  const [allPokemon, setAllPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?&limit=151"
  ); //actual URL holding pokemon

  const pokemons = async () => {
    const res = await axios.get(allPokemon);

    getPokemon(res.data.results);
    console.log(pokedex, "FlagA")
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(item.url, "url")
      setPokedex((state) => {
        state = [...state, result.data]; ///holding the state of "setPokedex/ pokedex" to later call for rendering of information

        // console.log(result.data, "here")
        return state;
      });
    });
  };

  useEffect(() => {
    pokemons();
  }, [setAllPokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <h1>Pokemon</h1>
        </div>

        <div className="pokedex">
          {/* map vs for loops??  They're both great. -- map, loops thru data being pulled  to render below */}

          {pokedex.map((item) => {
            return (
              // item.id = weird url route; + is an interpulation to return singular id
              <Link
                to={"/" + item.id}
                className="poke"
                id="div"
                key={item}
                onClick={<div className="one"></div>}
              >
                <h2 className="id">#{item.id}</h2>
                <img src={item.sprites.front_default} alt="sprite" />
                <h2 className="name">{item.name}</h2>
              </Link>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;

////***** vs code has the extension "prettier"; makes for an ease when your code is a little out of line and un-readable. Left click, format document, and your code instantly is easier for you and every one else to read. While learning to write and read code; messy work will be your worst enemy, especially in languages like python! ***** Never leave code that serves no purpose ex: a function you didnt realized you didnt need and just commented it out.
