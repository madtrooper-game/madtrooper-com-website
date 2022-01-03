import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import Button from "components/CustomButtons/Button.js";
import Snackbar from "@material-ui/core/Snackbar";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import Intro from "components/Intro";

import NFTs from "components/NFTs";
import Team from "components/Team";
import Audio from "components/Audio";
import AsSeenOn from "components/AsSeenOn";
import Markets from "components/Markets";
import Rarity from "components/Rarity";
import EmailFormMobile from "components/EmailForm/mobile";

import CountdownMobile from "components/Countdown/mobile";
import RoadMap from "components/RoadMap";
import MobileCarousel from "components/Carousel/mobile";
import FrontPage from "components/FrontPage";
import { isMobile } from "react-device-detect";
import discordImg from "assets/img/discord.png";
import instagramImg from "assets/img/instagram.svg";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MadTrooper"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 50,
          color: "#0E0E0E",
          textColor: "white",
        }}
        {...rest}
      />
      <Intro/>
      
      <div className={classes.containerWrapper}>
        <div className={classes.container}>
          {isMobile ? (
            <div style={{ marginTop: "60px" }}>
              <div className={classes.comingSoon}>
                <img
                  className={classes.solanaImage}
                  src={require("assets/img/solana.png").default}
                ></img>
                Minting on 5:55 PM CET
              </div>
              <div className={classes.content}>
                <div className={classes.brand}>
                  <div className={classes.title3}>
                    <div
                      style={{
                        fontWeight: "300",
                        fontSize: "40px",
                        lineHeight: "44px",
                      }}
                    >
                      Are you a
                    </div>
                    <div
                      style={{
                        fontWeight: "900",
                        fontSize: "40px",
                        lineHeight: "44px",
                      }}
                    >
                      Mad Trooper?
                    </div>
                  </div>
                  <EmailFormMobile setOpen={setOpen} />
                  <MobileCarousel />
                  <CountdownMobile />
                  <div className={classes.description}>
                    <p className={classes.subtitle}>
                      Embark on this wild intergalactic journey by minting your
                      own MadTrooper NFT on the Solana blockchain, and joining
                      the grand battle that will decide the very fate of the
                      world. Each MadTrooper is completely unique and has been
                      algorithmically generated to possess special attributes
                      and traits. Additionally, hidden within the army are a few
                      mythical warriors that are more powerful, and definitely
                      more batshit crazy, than the other MadTroopers.
                    </p>
                    <a
                      className={classes.socialTextDiscord}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://discord.gg/N7tWFsdPUJ"
                    >
                      <Button
                        className={classes.discordButton}
                        style={{ width: "240px" }}
                        solid
                      >
                        <img
                          src={discordImg}
                          style={{
                            width: "17px",
                            height: "17px",
                            marginRight: "4px",
                          }}
                        />
                        Join MadTrooper Discord
                      </Button>
                    </a>
                    <div className={classes["becomeMadtrooper"]}>
                      <div
                        style={{
                          fontWeight: "400",
                          fontSize: "32px",
                          lineHeight: "38px",
                        }}
                      >
                        Become a
                      </div>
                      <div
                        style={{
                          fontWeight: "700",
                          fontSize: "32px",
                          lineHeight: "38px",
                        }}
                      >
                        Madtrooper
                      </div>
                    </div>
                    <p className={classes.subtitle}>
                      The year is 2177. Humanity has conquered the solar system,
                      with settlements on Earth, Mars, and in the metaverse. But
                      the future of the human race is threatened by an invasion
                      from an intergalactic alien species that seeks to destroy
                      humanity. Left with no option but all-out war, the
                      galactic council has assembled a valiant army to challenge
                      the invading aliens and defend the solar system. Heralded
                      as the “MadTroopers”, the army consists of 3489
                      MadTroopers, consisting of the most feared warriors in the
                      galaxy, wearing outfits that are absolutely batshit crazy.
                    </p>
                  </div>
                  <div className={classes.social}>
                    <a
                      className={classes.socialText}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/themadtrooper/"
                    >
                      <Button className={classes.instaButton} solid>
                        <img
                          src={instagramImg}
                          style={{
                            width: "17px",
                            height: "17px",
                            marginRight: "4px",
                          }}
                        />
                      </Button>
                    </a>
                    <a
                      className={styles.socialText}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://discord.gg/N7tWFsdPUJ"
                    >
                      <Button className={classes.discordButton} solid>
                        <img
                          src={discordImg}
                          style={{
                            width: "17px",
                            height: "17px",
                            marginRight: "4px",
                          }}
                        />
                      </Button>
                    </a>
                    <a
                      href="https://twitter.com/TheMadTrooper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.socialText}
                    >
                      <Button className={classes.twitterButton} solid>
                        <i className={classes.socials + " fab fa-twitter"} />{" "}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <FrontPage setOpen={setOpen} />
          )}
        </div>
      </div>
      <Markets />
      <Rarity />
      <NFTs />
      <RoadMap />
      <Team />
      <Audio />
      <AsSeenOn />
      <Footer />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{
          anchorOriginTopRight: classes.topRight,
        }}
        onClose={() => setOpen(false)}
      >
        <div className={classes.snackbar}>You are now a Madtrooper!</div>
      </Snackbar>
    </div>
  );
}
