import React from 'react'
import styles from './ContactUsPage.module.css';
import PageHeader from '../../reuseableComponents/PageHeader/PageHeader';
import { webContactInfo } from '../../data';
import contactUsLarge from '../../images/contactLarge.jpg';
import contactUsMedium from '../../images/contactMedium.jpg'
import contactUsSmall from '../../images/contactSmall.jpg'

const ContactUsPage = () => {
    return (
        <div>
            <PageHeader header='Contact Us' />
            <div className={styles.container}>
                <img className={styles.contactImage}
                    srcSet={`${contactUsSmall} 200w, ${contactUsMedium} 300w, ${contactUsLarge} 400w`}
                    sizes="
                        (max-width: 500px) 100px,
                        (max-width: 1000px) 170px,
                        (max-width: 1300px) 280px,
                        350px
                        "
                    src={`${contactUsSmall}`}
                    alt="telephone image"
                />
                <ul >
                    {webContactInfo.map((info, index) => (
                        <li key={index} className={styles.infoCard}>
                            <h3>{info.name}</h3>
                            <p>{info.address}</p>
                            <p>Phone: {info.phone}</p>
                            <p>Fax: {info.fax}</p>
                            <p>Email: {info.email}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div >
    )
};

export default ContactUsPage;
