import React from "react";
import gif from "./img/loading2.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={gif} alt="loading..." width={200}></img>
    </div>
  );
}
