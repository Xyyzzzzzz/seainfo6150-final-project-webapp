import React from 'react'
import styles from './SubscribePage.module.css'

import Form from '../../reuseableComponents/Form/Form';
import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';

const SubscribePage = () => {
    return (
        <div>
            <PageHeader header='Subscribe' />
            <div className={styles.container}>
                <Form />
            </div>
        </div>
    )
};

export default SubscribePage;