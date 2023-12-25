import React from "react";
import "./Type.css"
import tipe from './types.json'

export default function Type({typeName, langue}) {
    const data = tipe[typeName]
    const colorz = data.backgroundColor
    const lang = data.translations[langue]

    return (
      <div className="Type" style={{backgroundColor: colorz, border: `1px solid black`}}>
        <span>{lang.toUpperCase()}</span>
      </div>
    );
  }