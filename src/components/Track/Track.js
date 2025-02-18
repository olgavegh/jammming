import React from "react";
import style from "./Track.module.css";

const Track = (props) => {
  return (
    <div className={style.track}>
      <div className={style.trackinfo}>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
    </div>
  );
};

export default Track;
