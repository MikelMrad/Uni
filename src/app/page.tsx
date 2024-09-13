import styles from "./page.module.css";
import Landing from "../../pages/Landing/index";
import { Route , Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
    </div>
  );
}
