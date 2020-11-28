import React from 'react';
import styles from './AppHeader.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.header}
                src={'http://recipepress-min.inspirydemos.com/wp-content/themes/inspiry-recipepress-demo/showcase/showcase-logo.png'}
            ></img>
        </div >
    )
};

export default Header;