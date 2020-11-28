import React from 'react'
import styles from './PageHeader.module.css'
import PageHeaderBanner from '../../images/pageHeaderBanner.jpg'


const PageHeader = ({ header }) => {
    return (
        <div className={styles.container}>

            {/* <img className={styles.image} src={PageHeaderBanner} alt='page header image' /> */}
            <div className={styles.heading}>
                <h1 className={styles.name}>{header}</h1>
            </div>
            {/* < div className={styles.header} /> */}
        </div>
    );
}

export default PageHeader;
