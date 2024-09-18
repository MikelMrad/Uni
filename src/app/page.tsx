import styles from "./page.module.css";
import Landing from "../../pages/Landing/index";
import Login from "../../pages/Login/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
      <Login/>
    </div>
  );
}
  