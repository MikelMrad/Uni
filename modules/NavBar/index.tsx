import Image from "next/image";
import styles from "./style.module.css";
import Logo from "../../static/logo.png"
import User from "../../static/user-interface.png"
import Cart from "../../static/market.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
        <Image 
        src={Logo}
        height={100}
        alt='Logo'>
        </Image>
        </a>
      </div>
      <div className={styles.navLinks}>
        <a href=''>Home</a>
        <a href=''>Shop Now</a>
        <a href=''>About Us</a>
        <a href=''>Contact Us</a>
      </div>
      <div className={styles.login}>
        <Image 
        src={Cart}
        height={50}
        width={50}
        alt='Logo'
        style={{
          marginRight: "10%",
        }}>
        </Image>
        <Image 
        src={User}
        height={50}
        width={50}
        alt='Logo'>
        </Image>
      </div>
    </div>
  );
}
