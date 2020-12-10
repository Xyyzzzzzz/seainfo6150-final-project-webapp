import React, { useState } from "react";
import styles from './Form.module.css'

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className={styles.container}>{
      submittedForm ? (
        <div>
          <div>
            <p>Thank you for your Subscribe! You are all set. Your form entries are as followings:</p>
          </div>
          <div className={styles.entries}>
            <p>Name: {submittedForm.get("name")}</p>
            <p>Email Address: {submittedForm.get("email")}</p>
            <p>Telephone Number: {submittedForm.get("telephone")}</p>
            <p>Facebook Username: {submittedForm.get("facebook-username")}</p>
            <p>Other Notes: {submittedForm.get("other-notes")}</p>
            <p>Selected Recipe Category: {submittedForm.get("selectedCategory")}</p>
            <p>Subscribe Method: {submittedForm.get("subcribeMethod")}</p>
            <p>Subcribe Language: {submittedForm.get("subcribeLanguage")}</p>
          </div>
        </div>
      ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.contactInfo}>
              <div className={styles.inputItem}>
                <label>Name <input required type="text" name="name" placeholder="Please enter your name." /></label>
              </div>
              <div className={styles.inputItem}>
                <label>Email Address  <input required type="email" name="email" placeholder="Please enter your email address." /></label>
              </div>
              <div className={styles.inputItem}>
                <label>Telephone <input required type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Please enter your telephone number in this format 'XXX-XXX-XXXX'." /></label>
              </div>
              <div className={styles.inputItem}>
                <label>Facebook Username <input type="text" name="facebook-username" placeholder="Please enter your Facebook username, optional." /></label>
              </div>
              <div className={styles.inputItem}>
                <label>Other Notes <input type="text" name="other-notes" placeholder="Please enter other notes you want to share, optional." /></label>
              </div>
            </div>
            <div className={styles.subcribePreferences}>
              <div className={styles.selectedCategory}>
                <p>Please select one category you want to subscribe.</p>
                <label><input type="radio" name="selectedCategory" value="American" required />American</label>
                <label><input type="radio" name="selectedCategory" value="Asian" required />Asian</label>
                <label><input type="radio" name="selectedCategory" value="European" required />European</label>
                <label><input type="radio" name="selectedCategory" value="Others" required />Others</label>
              </div>

              <div className={styles.subcribeMethod}>
                <p>Please select the subscribe method.</p>
                <select name="subcribeMethod" >
                  <option value="Email">Email</option>
                  <option value="Text">Text</option>
                </select>
              </div>

              <div className={styles.subcribeLanguage}>
                <p>Please select your perfered language.</p>
                <select name="subcribeLanguage">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>
            </div>
            <button className={styles.subscribe}>Subscribe</button>
          </form >
        )}
    </div >
  )
}

export default Form
