/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components

import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons

import scssStyles from "./index.module.scss";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classNames(classes.container, classes.mobileContainer)}>
        <div className={classes.footerContent}>
          Contact us:{" "}
          <a href="mailto:hello@madtrooper.com" className={aClasses}>
            hello@madtrooper.com
          </a>
          <a
            className={scssStyles["social-btn"]}
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/N7tWFsdPUJ"
          >
            <i className={styles.socials + " fab fa-discord"} /> DISCORD
          </a>
          <a
            className={scssStyles["social-btn"]}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/themadtrooper/"
          >
            <i className={styles.socials + " fab fa-instagram"} /> INSTAGRAM
          </a>
          <a
            href="https://twitter.com/TheMadTrooper"
            target="_blank"
            rel="noopener noreferrer"
            className={scssStyles["social-btn"]}
          >
            <i className={styles.socials + " fab fa-twitter"} /> TWITTER
          </a>
          <a
            href="https://www.youtube.com/watch?v=xTfflnM2nDU"
            target="_blank"
            rel="noopener noreferrer"
            className={scssStyles["social-btn"]}
          >
            <i className={styles.socials + " fab fa-youtube"} /> YOUTUBE
          </a>
          <a
            className={classes.buynow}
            rel="noopener noreferrer"
            href="/#buy_now"
          >
            BUY A MAD TROOPER Now
          </a>
        </div>
        <div className={classes.copyright}>
          <a href="/term-of-use" className={classes.termOfUse} target="_blank">
            Terms of use
          </a>
          Copyright {1900 + new Date().getYear()} &copy;{" "}
          <a href="https://eddaswap.com" className={aClasses} target="_blank">
            MadTrooper by EDDASwap
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
