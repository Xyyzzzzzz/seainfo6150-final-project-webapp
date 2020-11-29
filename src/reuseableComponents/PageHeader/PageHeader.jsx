import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = ({ header }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1 className={styles.name}>{header}</h1>
            </div>
        </div>
    );
}

export default PageHeader;
