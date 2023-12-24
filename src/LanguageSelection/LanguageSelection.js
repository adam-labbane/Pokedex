import React from "react";
import "./LanguageSelection.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LanguageSelection({langue, setLang}) {

  function handleChange(event){
    console.log(event.target.value)
    setLang(event.target.value)
  }
    return (
      <div className="LanguageSelection">
        <Box sx={{ minWidth: 120, color: "white"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">fr</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={langue} onChange={handleChange}>
              <MenuItem value="fr">fr</MenuItem>
              <MenuItem value="en">en</MenuItem>
              <MenuItem value="de">de</MenuItem>
              <MenuItem value="es">es</MenuItem>
              <MenuItem value="ja">ja</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    );
  }