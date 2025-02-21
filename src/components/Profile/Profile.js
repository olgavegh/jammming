import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import Spotify from "../../util/Spotify";

const Profile = () => {
  const [userUrl, setUserUrl] = useState(""); // set avatar url

  useEffect(() => {
    Spotify.getUserProfile().then(setUserUrl);
  }, [userUrl]);

  return (
    <div className={styles.profile}>
      {userUrl ? (
        userUrl && <img src={userUrl} alt="Spotify Avatar" />
      ) : (
        <button className="secondaryButton " onClick={Spotify.getAccessToken()}>
          Login
        </button>
      )}
    </div>
  );
};

export default Profile;
