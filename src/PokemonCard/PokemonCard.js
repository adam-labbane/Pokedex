import React from "react";
import "./PokemonCard.css"
import Type from "../Type/Type";
import { Link } from "react-router-dom";

export default function PokemonCard({id, name, image, types, langue}) {
  const paddedId = (id + 1).toString().padStart(3, '0');
  const formattedId = `No.${paddedId}`;
    return (
      <div className="PokemonCard">
        <span className="num">{formattedId}</span>
        <span className="name custom-name">{name}</span>
        <Link to={`/pokemon/${id + 1}`}>
          <img src={image}/>
        </Link>
        {types.map((type) => {
          return (<Type typeName={type} langue={langue}></Type>)
        })}
      </div>
    );
  }