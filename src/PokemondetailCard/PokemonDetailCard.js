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
            <span className="name">{name}</span>
            <img src={image}/>
            <span className="taille">{taille}</span>
            <span className="poids">{poids}</span>
            {types.map((type) => {
                return (<Type typeName={type} langue={langue}></Type>)
                })}
            <Button variant="outlined" color="error" onClick={handleMovesButtonClick} >Moves</Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Pokemon Moves</DialogTitle>
              <DialogContent sx={{ maxWidth: 'xl' }}>
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