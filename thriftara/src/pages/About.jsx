import React from "react";
import styles from "../styles/About.module.css";
import thrifting from "../images/thrifting.jpg";

function About() {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.box}>
          <h1>About Us</h1>
          <h2>"Saving the world, while saving your wallet"</h2>
        </div>
      </div>
      <div className="container" id={styles.info}>
        <div className="row">
          <div className="col">
            <h4>
              This project is meant to create a website for users to sell and
              buy used and no longer wanted items, similar to websites like
              eBay, Craigslist, Grailed, etc. Items can range from clothes to
              technology that is in good condition and reusable. But, unlike
              existing thrifting websites, we want to create a site centered
              around the user experience. This includes a better UI and item
              recommendations based on user preferences.
            </h4>
          </div>
          <div className="col">
            <img
              className={styles.picture}
              src={thrifting}
              alt="Cartoon of Thrifting"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
