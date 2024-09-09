import React from "react";
import FooterLogo from "../../static/logo.png";
import FacebookImage from "../../static/facebook.png";
import LinkedInImage from "../../static/LinkedIn.png";
import InstagramImage from "../../static/instagram.png";
import styles from "./style.module.css"
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
          <a>
            <Image 
            src={FooterLogo}
            alt="Logo"
            width={150}
            id={styles.logo}> 
            </Image>
          </a>
          <div className={styles.footerSocialsContainer}>
            <a href="https://www.facebook.com/profile.php?id=100088695495851"><Image 
            src={FacebookImage}
            alt="Logo"
            width={20}
            height={20}
            className="social-image"> 
            </Image></a>
            <a href=""><Image 
            src={LinkedInImage}
            alt="Logo"
            width={20}
            height={20}
            className="social-image"> 
            </Image></a>
            <a href=""><Image 
            src={InstagramImage}
            alt="Logo"
            width={20}
            height={20}
            className="social-image"> 
            </Image></a>  
          </div>
          <div className={styles.textContainer}>
            <div className={styles.rightTextContainer}>
              <a href="">
                Privacy & Policies
              </a>
              <a href="https://www.estests.com/t-and-c">
                Terms & Conditions
              </a>
              <a href="mailto:pr@academicassessment.com">
                Contact Us
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
