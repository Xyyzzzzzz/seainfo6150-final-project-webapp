import React from 'react';
import styles from './AppHeader.module.css';
import appHeader from '../../images/appHeader.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/" ><img src={appHeader} alt='app header image' /></Link>
        </div >
    )
};

export default Header;