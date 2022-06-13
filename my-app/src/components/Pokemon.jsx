import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState();

  const { id } = useParams();

  const getPokemonData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}?`);
    console.log(res.data, "here");
    setPokemonDetails(res.data);
  };

  useEffect(() => {
    getPokemonData(id);
  }, []);
  /// ternary needed to load information-- page is loading before the axios..
  return pokemonDetails ? (
    <div className="deyts">
      <h1>{pokemonDetails.name}</h1>

      
      <div className="sprites">
        <h3>Normal:</h3>
        <img
          src={pokemonDetails.sprites.front_default}
          style={{ width: "20rem" }}
        ></img>
        <h3>Shiny:</h3>
        <img
          src={pokemonDetails.sprites.front_shiny}
          style={{ width: "20rem" }}
        ></img>
      </div>
      <h3 className="list">Stats</h3>
      <div className="basicInfo">
        {pokemonDetails.types.map((t) => (
          <div>
            <h2>Type: {t.type.name}</h2>
          </div>
        ))}
        <></>
      </div>

      <div className="moves">
        {pokemonDetails.stats.map((s) => (
          <>
            <h3 className="move">
              {s.stat.name}: 
            {s.base_stat}</h3>
          </>
        ))}
      </div>
    </div>
  ) : (
    <></>
  ); ///buffer to ternary
}
