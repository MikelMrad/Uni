import styles from "./page.module.css";
import Landing from "./Landing/page";
import Cart from "./Category/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
      <Cart/>
    </div>
  );
}
  