import React from "react";

import Carousel from "../Carousel";
import EmailForm from "../EmailForm";
import Button from "components/CustomButtons/Button.js";
import Countdown from "components/Countdown";

import styles from "./index.module.scss";

import discordImg from "assets/img/discord.png";
import instagramImg from "assets/img/instagram.svg";

const FrontPage = ({ setOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.title}>
          <div className={styles["light-text"]}>Are you a</div>
          <div className={styles["bold-text"]}>MadTrooper?</div>
        </div>
        <div className={styles.text}>
          <div>
            Embark on this wild intergalactic journey by minting your own Mad
            Trooper NFT on the Solana blockchain, and joining the grand battle
            that will decide the very fate of the world. Each MadTrooper is
            completely unique and has been algorithmically generated to possess
            special attributes and traits. Additionally, hidden within the army
            are a few mythical warriors that are more powerful, and definitely
            more batshit crazy, than the other MadTroopers.
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.email}>
          <EmailForm setOpen={setOpen} />
        </div>
      </div>
      <div className={styles.carousel}>
        <Carousel />
        <Countdown className={styles["desktop-countdown"]} />
      </div>
      <div className={styles.third}>
        <div className={styles.p2}>
          The year is 2177. Humanity has conquered the solar system, with
          settlements on Earth, Mars, and in the metaverse. But the future of
          the human race is threatened by an invasion from an intergalactic
          alien species that seeks to destroy humanity. Left with no option but
          all-out war, the galactic council has assembled a valiant army to
          challenge the invading aliens and defend the solar system. Heralded as
          the “MadTroopers”, the army consists of 3489 MadTroopers, consisting
          of the most feared warriors in the galaxy, wearing outfits that are
          absolutely batshit crazy.
        </div>
        <div className={styles["social-button"]}>
          <a
            className={styles.socialText}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/themadtrooper/"
          >
            <Button className={styles.instaButton} solid>
              <img
                src={instagramImg}
                style={{ width: "17px", height: "17px", marginRight: "4px" }}
              />
              Instagram
            </Button>
          </a>
          <a
            className={styles.socialText}
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/N7tWFsdPUJ"
          >
            <Button className={styles.discordButton} solid>
              <img
                src={discordImg}
                style={{ width: "17px", height: "17px", marginRight: "4px" }}
              />
              Discord
            </Button>
          </a>
          <a
            href="https://twitter.com/TheMadTrooper"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialText}
          >
            <Button className={styles.twitterButton} solid>
              <i className={styles.socials + " fab fa-twitter"} /> Twitter
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
