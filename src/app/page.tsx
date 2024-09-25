import styles from "./page.module.css";
import Landing from "./Landing/page";
import Cart from "./Cart/page";
import Checkout from "./Checkout/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
      <Cart/>
      <Checkout/>
    </div>
  );
}
  