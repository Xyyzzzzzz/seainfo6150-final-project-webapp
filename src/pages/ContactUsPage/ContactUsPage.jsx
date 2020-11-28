import React from 'react'
import styles from './ContactUsPage.module.css';

import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';

const webContactInfo = [
    {
        name: "Registered Office",
        address: 'Recipe press road, Sunnyvale, CA',
        phone: '+123 456 7890',
        fax: '+123 456 7890',
        email: 'info@recipepress.com',
    },
    {
        name: "Our Restaurant",
        address: 'Recipe press road, Sunnyvale, CA',
        phone: '+123 456 7890',
        fax: '+123 456 7890',
        email: 'info@recipepress.com',
    },
    {
        name: "Other Office",
        address: 'Recipe press road, Sunnyvale, CA',
        phone: '+123 456 7890',
        fax: '+123 456 7890',
        email: 'info@recipepress.com',
    },
]

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
