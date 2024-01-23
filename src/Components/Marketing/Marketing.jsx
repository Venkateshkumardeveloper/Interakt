import React from "react";
import styles from "./Marketing.module.css";
import { Link } from "react-router-dom";

const Marketing = () => {


  return (
    <>
      <div className={styles.main}>
        <div className={styles.marketingitems}  data-aos="fade-left">
          <div className={styles.image}></div>
        </div>
        <div className={styles.marketingitems1} data-aos="fade-left">
          <div className={styles.marketingdetails}>
            <div className={styles.marketingheading}>
                <Link to='/'><p className={styles.marketingheadingtext}>Home</p></Link>
              <p className={styles.marketingheadingtext}>Marketing</p>
              <p className={styles.marketingheadingtext}>Sales</p>
              <p className={styles.marketingheadingtext}>Support</p>
            </div>
            <div>
              <p className={styles.markettext}>
                Unlocking Potential: Interakt’s Diverse Capabilities for Success
              </p>
              <p className={styles.markettext1}>
                Generate high-intent leads for your business with Interakt
              </p>

              <div className={styles.marketcontent}>
              <p className={styles.markettext2}>
              Engage customers throughout their buyer’s journey with Interakt’s powerful notification engine
              </p>
              <p className={styles.markettext2}>Keep your customers updated on their orders with automated shipping & delivery updates</p>
              <p className={styles.markettext2}>Track campaign performance and find out what worked for you & what did not</p>
              <Link to='/contact'>
              <button className={styles.btn} >Signup for free</button></Link>

              </div>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
