import React from "react";
import "./kodeSong.css";

export default function KodeSong(props) {
  return (
      <div className="cards">
        <div className="kotak-img">
          <img src={props.data.album.images[0].url} alt="" />
        </div>
        <div className="kotak-main">
          <h1>{props.data.name}</h1>
          <h3>{props.data.artists[0].name}</h3>
        </div>
        <button className="kotak1-btn">Select</button>
      </div>
  );
}