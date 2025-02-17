import logo from "./logo.svg";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <main>
        <div class={styles.hero}>
          <SearchBar placeholder="Enter a Song Title" />
        </div>
      </main>
    </div>
  );
}

export default App;
