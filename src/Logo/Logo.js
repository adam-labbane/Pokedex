import React from "react";
import "./Logo.css"
import logo from './logo.svg'
import { Link, Outlet } from "react-router-dom";

export default function Logo() {
    return (
      <div className="Logo">
        <Link to="/">
          <img src={logo}/>
        </Link>
      </div>
    );
  }