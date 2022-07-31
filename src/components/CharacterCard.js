import React from "react";

export default function CharacterCard({ src, alt, id, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      id={id}
      className="characterCard"
    />
  );
}
