import React, { useState, useEffect } from "react";
import "./PokemonList.css"
import PokemonCard from "../PokemonCard/PokemonCard";
//import Pokemons from './pokemons.json'

export default function PokemonList({text, langue}) {
  const [Pokemons, setPokemons] = React.useState("")


  useEffect(() => {
    fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
      .then((res) => res.json())
      .then((pokemonResponse) => {
        setPokemons(pokemonResponse);
      });
  }, []);

  const card = []
  for (let i=0; i<Pokemons.length; i++) {
    
    
    if (Pokemons[i].names[langue].toLocaleLowerCase().startsWith(text.toLowerCase()))
    {
      card.push(<PokemonCard id={i} name={Pokemons[i].names[langue]} image={Pokemons[i].image} types={Pokemons[i].types} langue={langue}></PokemonCard>)
    }
  }
    return (
      <div className="PokemonList">
        {card}
      </div>
    );
  }