import { Outlet } from "react-router-dom";

import styles from "./App.module.css";

import logo from "./assets/logoTwo.png";

function App() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
