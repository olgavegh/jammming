import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = (props) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist tracks={props.results} />
    </div>
  );
};

export default SearchResults;
