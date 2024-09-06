import Image from "next/image";
import styles from "./style.module.css";
import Apple from "../../static/apple.png"
import User from "../../static/user-interface.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
        src={Apple}
        height={100}
        width={100}
        alt='Logo'>
        </Image>
      </div>
      <div className={styles.navLinks}>
        <a href=''>Home</a>
        <a href=''>Shop Now</a>
        <a href=''>About Us</a>
        <a href=''>Contact Us</a>
      </div>
      <div className={styles.login}>
        <p>Name Last Name</p>
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
