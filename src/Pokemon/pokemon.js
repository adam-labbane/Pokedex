
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import PokemonDetailCard from '../PokemondetailCard/PokemonDetailCard';
import CircularProgress from '@mui/material/CircularProgress';
//import Pokemons from './pokemons.json'

import "./pokemon.css"

export function Pokemon({langue})
{
    const [Pokemons, setPokemons] = React.useState([])
    const [moves, setMoves] = useState([]);

    let {id} = useParams();
    id = id - 1


    useEffect(() => {
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
        .then((res) => res.json())
        .then((pokemonResponse) => {
          setPokemons(pokemonResponse);
          const currentPokemon = pokemonResponse[id];
          setMoves(currentPokemon.moves || []);
        });
    }, [id]);

    if (Pokemons.length == 0)
    {
        return <CircularProgress />
    }
    return (
        <div className='pokemon'><PokemonDetailCard 
        name={Pokemons[id].names[langue]} 
        image={Pokemons[id].image} 
        taille={Pokemons[id].height} 
        poids={Pokemons[id].weight}   
        types={Pokemons[id].types} 
        langue={langue}
        moves={moves}>
          
          </PokemonDetailCard></div>
    )
}