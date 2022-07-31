import React from "react";

export default function CharacterCard({ src, alt, id, onClick, name }) {
  return (
    <div className="characterCard">
      <img src={src} alt={alt} onClick={onClick} id={id} />
      <h4 className="charName">{name}</h4>
    </div>
  );
}
