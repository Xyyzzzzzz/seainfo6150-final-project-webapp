import React from 'react'
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/category/American">American</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/category/Asian">Asian</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/category/European">European</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/subscribe">Subscribe</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;