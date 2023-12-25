
import TextField from "@mui/material/TextField";


export default function SearchBar({text, setText}) {
  
  
  function onChange(event){
    setText(event.target.value)
  }

  return (
    <div className="SearchBar">
      <TextField
        color="primary"
        sx={{ backgroundColor: "#292c33" }}
        id="outlined-basic"
        variant="outlined"
        value={text}
        onChange={onChange}
        fullWidth
        label="Enter a pokemon name"
    />
    </div>
  );
}