import React from "react";
import "./PokemonDetailCard.css"
import Type from "../Type/Type";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonDetailCard({name, image, types, langue, taille, poids}) {

    function moves(){
        alert("test")
    }
    taille = taille / 10 + "m"
    poids = poids / 10 + "kg"
      return (
        <div className="PokemonDetailCard">
            <span className="name">{name}</span>
            <img src={image}/>
            <span className="taille">{taille}</span>
            <span className="poids">{poids}</span>
            {types.map((type) => {
                return (<Type typeName={type} langue={langue}></Type>)
                })}
            <Button variant="outlined" color="error" onClick={moves}>
              Moves
            </Button>
            <Typography variant="subtitle1" component="div">
              Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" color="error" onClick={moves}>
              Moves
            </Button>
            <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            />
        </div>
      );
    }