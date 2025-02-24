import { useState } from "react";
import styles from "./AccessMessage.module.css";

function AccessMessage() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.accessMessage}>
      This app is in development mode. If you'd like to try it, send me your
      email address.
      <button onClick={() => setIsVisible(false)}>Close</button>
    </div>
  );
}

export default AccessMessage;
