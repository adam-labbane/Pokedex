import Header from "../Header/Header"
import "./AppWrapper.css"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
  } from "react-router-dom";
export function AppWrapper({langue, setLang})
{
  return (
    <div>
      <Header langue={langue} setLang={setLang}></Header>
      <Outlet></Outlet>
    </div>

  )
}