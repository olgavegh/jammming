import React from "react";
import style from "./Track.module.css";

const Track = (props) => {
  const addNewTrack = () => {
    props.onAdd(props.track);
  };

  const renderAction = () => {
    if (props.onAdd) {
      return (
        <button className={style.trackAction} onClick={addNewTrack}>
          +
        </button>
      );
    }
  };

  return (
    <div className={style.track}>
      <div className={style.trackinfo}>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
