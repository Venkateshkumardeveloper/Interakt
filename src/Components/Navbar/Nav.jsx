import React from 'react'
import styles from './Nav.module.css'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.navitems} data-aos="fade-left">
          <div className={styles.logo}></div>
            <Link to='/home' className={styles.maintitle}><h3 className={styles.title}>Interakt</h3></Link>
            
        </div>
        <div className={styles.navitems1} data-aos="fade-left">
          <Link to='/banner' className={styles.maintitle}>  <p className={styles.navtext}>Banner</p></Link>
          
          <Link to='/contact' className={styles.maintitle}>  <p className={styles.navtext}>Contact</p></Link>
            <Link to='/market' className={styles.maintitle}>  <p className={styles.navtext}>Marketing</p></Link>
            <Link to='/nav' className={styles.maintitle}><p className={styles.navtext}>Nav</p></Link>
            <Link to='/api' className={styles.maintitle}><p className={styles.navtext}>API </p></Link>
            <Link to='/about' className={styles.maintitle}><p className={styles.navtext}>About </p></Link>
          
        </div>
      </div>
    </>
  
  )
}

export default Nav