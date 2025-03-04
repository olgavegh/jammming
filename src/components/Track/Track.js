import React from "react";
import style from "./Track.module.css";

const Track = (props) => {
  const addNewTrack = () => {
    props.onAdd(props.track);
  };

  const removeOldTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.onAdd) {
      return (
        <button className={style.trackAction} onClick={addNewTrack}>
          +
        </button>
      );
    }

    if (props.onRemove) {
      return (
        <button className={style.trackAction} onClick={removeOldTrack}>
          -
        </button>
      );
    }
  };

  if (!props.track.image) {
    return (props.track.image =
      "https://api.dicebear.com/9.x/identicon/svg?seed=Kimberly");
  }

  return (
    <div className={style.track}>
      <img
        src={props.track.image}
        className={style.preview}
        alt="track preview"
      />
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
