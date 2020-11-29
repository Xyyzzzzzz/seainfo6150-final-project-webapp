import React from 'react';
import styles from './AppHeader.module.css';
import appHeader from '../../images/appHeader.jpg';

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={appHeader} alt='app header image' />
        </div >
    )
};

export default Header;