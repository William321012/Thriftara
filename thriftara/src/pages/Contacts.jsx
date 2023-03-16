import React from "react";
import styles from "../styles/Contacts.module.css";
import email from "../images/email.png";
import phone from "../images/phone.jpg";
import chat from "../images/chat.png";

function Contacts() {
  return (
    <div>
      <h1 className={styles.title}>Contact Us</h1>
      <span class={styles.fadeline}></span>
      <div className="Container" id={styles.content}>
        <div className="row justify-content-md-center">
          <div className="col-3">
            <img className={styles.image} src={email} alt="Icon of email" />
            <h3>Email</h3>
            <span class={styles.fadeline}></span>
            <h4>William321012@gmail.com</h4>
          </div>
          <div className="col-3">
            <img className={styles.image} src={phone} alt="Icon of Thrifting" />
            <h3>By Phone</h3>
            <span class={styles.fadeline}></span>
            <h4>
              Monday to Friday <br /> 9am to 6pm PST
            </h4>
            <h4>1-347-326-4860</h4>
          </div>
          <div className="col-3">
            <img className={styles.image} src={chat} alt="Icon of Thrifting" />
            <h3>Live Chat</h3>
            <span class={styles.fadeline}></span>
            <h4>
              Chat with a member of our <br /> in-house team.
            </h4>
            <button type="button" className="btn-primary">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
