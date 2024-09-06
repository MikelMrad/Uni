import styles from "./page.module.css";
import Landing from "../../pages/Landing/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
    </div>
  );
}
