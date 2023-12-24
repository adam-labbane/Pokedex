import React from "react";
import "./Header.css"
import Logo from "../Logo/Logo";
import LanguageSelection from "../LanguageSelection/LanguageSelection";

export default function Header({langue, setLang}) {
    return (
      <div className="Header">
        <Logo></Logo>
        <LanguageSelection langue={langue} setLang={setLang}></LanguageSelection>
      </div>
    );
  }