import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TyresList from "./Components/TyresList";
import styles from "./container.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <TyresList />
    </div>
  );
}

export default App;
