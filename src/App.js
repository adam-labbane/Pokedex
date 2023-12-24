import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import PokemonList from './PokemonList/PokemonList';
import SearchBar from './SearchBar/SearchBar';
import { AppWrapper } from './AppWrapper/AppWrapper';
import React from 'react';
import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Pokemon } from './Pokemon/pokemon';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },

});


function App() {
  const [text , setText] = React.useState("")
  const [langue , setLang] = React.useState("fr") 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={ <AppWrapper langue={langue} setLang={setLang} ></AppWrapper>}>
          <Route path="/" element={<div><SearchBar text={text} setText={setText}></SearchBar><PokemonList text={text} langue={langue}></PokemonList></div>} />
          <Route path='/pokemon/:id' element={<Pokemon langue={langue}></Pokemon>} />
          <Route path='*' element={<div>attention</div>} />
        </Route>

      </>
    )
  );

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  );
}

export default App;
