import React from "react";
import styles from "./About.module.css";
import { FaSuitcase } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";


const About = () => {
  return (
    <>
      <div className={styles.main} >
        <div className={styles.aboutcontent} id="main">
          <div className={styles.aboutcontent1}>
            <h2>
              Track Your Business Marketing To The Next Level With Town Contacts
              Technologies
            </h2>
            <a href="#about">
              <button className={styles.btn}>About us</button>
            </a>
          </div>
          <div className={styles.aboutcontent2}>
            <div className={styles.image}></div>
          </div>
        </div>
        <div className={styles.abouttext} id="about">
          <h2><FaSuitcase style={{paddingRight:'0.5rem',paddingTop:'0.2rem', color:'skyblue'}} />ABOUT</h2>
          <p>
            Town Contacts Technologies Pvt Ltd (Town) is a combination of young
            and innovative minds that provides cutting-edge solutions to
            360-degree variants and also specifically to businesses of all
            sizes. We are constantly evolving and expanding our offerings to
            meet the ever-changing needs of our clients. We pride ourselves on
            being able to provide custom solutions that are tailored to each
            client's needs.
          </p>
          <p>
            Town Contacts Technologies Pvt Ltd (Town) is a combination of young
            and innovative minds that provides cutting-edge solutions to
            360-degree variants and also specifically to businesses of all
            sizes. We are constantly evolving and expanding our offerings to
            meet the ever-changing needs of our clients. We pride ourselves on
            being able to provide custom solutions that are tailored to each
            client's needs.
          </p>
          <p>
            We are headquartered in Bengaluru (India) and our regional offices
            are spread across virtual and physical office locations. However,
            our team is spreading their services across the globe. We have
            clients in over multiple countries, and our products are used by
            prominent organisations in the vertical industry.
          </p>
          <p>
            We are always looking for potential clients who are enthusiastic
            about innovative and unique methods. With back-to-back R&D and
            already tested products and services of Town. If you are passionate
            about AI enabled technologies for your business and want to be a
            part of a company that is making a difference, we want to hear from
            you!!!
          </p>
        </div>
        <div className={styles.abouttext} >
          <h2><FaRegBuilding style={{paddingRight:'0.5rem',paddingTop:'0.2rem', color:'skyblue'}} />OVERVIEW</h2>
          <p>
          Town Contacts Technologies Pvt Ltd (Town) is an Indian Technology Company providing Internet-related products and services, including an Internet Search Engine, Social Media, Information Services, IP-Tv, mobile applications, and other online & offline services. Our goal is to serve consumers and businesses better navigate the online connecting town and the towners.
          </p>
          <p>
          Town was born in 2014 and if it were a person it would have started its life gradually and as it reached the elementary school 2016 and then Town was known as Town Technologies Pvt. Ltd. later understanding and developing the necessary skills from elementary school Town then renamed itself in May 2021 to Town Contacts Technologies Pvt Ltd as with the aim of connecting the town and the towners across the world through the revolutionary social media marketplace called connecting.town and along with other various products of the company.
          </p>
          <p>
          Well,we all know companies are not people and among the major differences, companies should oversee & supervise itself from the time of birth also being efficient, sustaining & self supporting. But alongside the lifespan as of a person, company’s year by year growth and assessment is also major. And the major projects and developments Town has accomplished till today are explained in the Products and Services session below.
          </p>
       
        </div>

        <div className={styles.footer}>
            <p>© Copyright Town Contacts Technologies Pvt Ltd. All Rights Reserved</p>

            <Link to='/' className={styles.maintitle}>  <p className={styles.navtext}>Home</p></Link>
            <Link to='/about' className={styles.maintitle}>  <p className={styles.navtext}>About</p></Link>
            <Link to='/contact' className={styles.maintitle}>  <p className={styles.navtext}>contact</p></Link>
            <p>Privacy policy</p>
            <p>Term of use</p>




        </div>
        <a href="#main">
        <button className={styles.arrow}><FaArrowCircleUp />
</button></a>
      </div>
    </>
  );
};

export default About;
