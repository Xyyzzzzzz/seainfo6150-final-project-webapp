import React from 'react'
import styles from './ContactUsPage.module.css';

import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';
import { webContactInfo } from '../../data';

const ContactUsPage = () => {
    return (
        <div>
            <PageHeader header='Contact Us' />
            <div className={styles.container}>
                {webContactInfo.map(info => (
                    <div className={styles.infoCard}>
                        <h3>{info.name}</h3>
                        <p>{info.address}</p>
                        <p>Phone: {info.phone}</p>
                        <p>Fax: {info.fax}</p>
                        <p>Email: {info.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ContactUsPage;
