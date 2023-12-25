import React, { useState, useEffect } from "react";
import "./PokemonDetailCard.css"
import Type from "../Type/Type";
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function PokemonDetailCard({name, image, types, langue, taille, poids, moves}) {
    taille = taille / 10 + "m"
    poids = poids / 10 + "kg"

    const [openDialog, setOpenDialog] = useState(false);

    const handleMovesButtonClick = () => {
      setOpenDialog(true);
    };

    const handleCloseDialog = () => {
      setOpenDialog(false);
    };


      return (
        <div className="PokemonDetailCard">
            <span className="name custome-name">{name}</span>
            <img src={image} alt={name} className="pokemon-image" />
            <div className="info-container">
              <div className="info">
                <span className="taille">{taille}</span>
                <span className="poids">{poids}</span>
              </div>
            </div>
            <div className="types">
            {types.map((type) => {
                return (<Type typeName={type} langue={langue}></Type>)
                })}
            </div>
            <Button variant="outlined" color="error" onClick={handleMovesButtonClick} className="moves-button" >Moves</Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Pokemon Moves</DialogTitle>
              <DialogContent >
                {moves.map((move, index) => (
                <div key={index}>{move}</div>
                ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                  </DialogActions>
                  </Dialog>
                  </div>
                  );
                }