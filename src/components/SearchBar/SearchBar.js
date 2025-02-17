import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "./SearchBar.module.css";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const mockup = {};

  const [input, setInput] = useState("");

  // manage input changes
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // eraser
  const handleClear = () => {
    setInput("");
  };

  // manage search
  const handleSubmit = (e) => {
    // prevents the form from refreshing the page
    e.preventDefault();
    if (onSearch) onSearch(input);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.contentContainer}>
        {" "}
        <FiSearch className={styles.searchIcon} />
        {input && (
          <FiX
            className={`${styles.searchIcon} ${styles.right}`}
            onClick={handleClear}
          />
        )}
        <input
          type="text"
          value={input}
          // Each character entered refreshes the status
          onChange={handleChange}
          placeholder={placeholder}
          className={styles.inputBox}
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
