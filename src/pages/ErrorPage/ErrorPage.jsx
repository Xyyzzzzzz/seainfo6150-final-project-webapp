import React from "react";
import errorImage from "../../images/error.jpg";
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Oops Sorry!</h1>
                <h2>404 Page not found</h2>
                <p>It seems that something went wrong...</p>
            </div>

            <img className={styles.image} src={errorImage} alt="error" />

        </div>
    )
}

export default ErrorPage;