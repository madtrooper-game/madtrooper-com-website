import React from "react";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import discordImg from "assets/img/discord.png";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "./index.module.scss";

import faqs from "./faq";

export default function Components(props) {
  const { ...rest } = props;
  return (
    <div className={styles.background}>
      <Header
        brand="MadTrooper"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "#120034",
        }}
        {...rest}
      />
      <div className={styles.container}>
        <div className={styles.title}>FAQ</div>
        <div className={styles.discord}>
          <a
            className={styles.joinDiscord}
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/N7tWFsdPUJ"
          >
             <img
            src={discordImg}
            style={{ width: "30px", height: "30px", marginRight: "4px", marginBottom: '5px' }}
          />{" "}
            Join MadTrooper Discord
          </a>
        </div>
        {faqs.map((faq) => {
          return (
            <div className={styles["question-container"]} key={faq.id}>
              <div className={styles.question}>{faq.question}</div>
              <div className={styles.answer}>{faq.answer}</div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
