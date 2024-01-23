import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useEffect } from "react";



const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animations should only happen once
      // Additional global settings here
    });
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.banner1} data-aos="fade-right">
        <Link to='/'><p className={styles.marketingheadingtext}>Home</p></Link>
     


          <p className={styles.whatsapp}>   <FaWhatsapp className={styles.whatsappicon} />Official WhatsApp Business Platform</p>
          <h3 className={styles.bannertitle}>
            Transform Conversations into Conversions with WhatsApp{" "}
          </h3>
          <p className={styles.bannertext}>
            The only full-stack platform to offer a seamless customer experience
            & grow your business on WhatsApp
          </p>
          <div className={styles.bannerbuttons}> 
          <Link to='/contact'>
          <button className={styles.bannerbtn}>Start Free trail</button></Link>
         
          </div>
         
        </div>
        <div className={styles.banner2}  data-aos="fade-left"></div>
      </div>
    </>
  );
};

export default Banner;
