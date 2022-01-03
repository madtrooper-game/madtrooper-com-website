/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import scrollIntoView from "scroll-into-view";
// @material-ui/icons

// core components

import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import discordImg from "assets/img/discord.png";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  
  
  const onAboutClick = () => {
    const dom = document.getElementById("about");
    scrollIntoView(dom, {
      align: { topOffset: 40 },
    });

    if (props.onClick) {
      props.onClick();
    }
  };

  const onRoadmapClick = () => {
    const dom = document.getElementById("roadmap");
    scrollIntoView(dom, {
      align: { topOffset: 60 },
    });

    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
          onClick={props.onClick}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          className={classes.buynow}
          rel="noopener noreferrer"
          href="/#buy_now"
        >
          Buy Now
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://staking.madtrooper.com"
          color="transparent"
          className={classes.navLink}
        >
          Stake
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#rarity"
          color="transparent"
          className={classes.navLink}
        >
          Rarity
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={onRoadmapClick}
          className={classes.navLink}
        >
          Roadmap
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          // href="/#about"
          color="transparent"
          onClick={onAboutClick}
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#soundtrack"
          color="transparent"
          className={classes.navLink}
        >
          Sounds
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#as_seen_on"
          color="transparent"
          className={classes.navLink}
        >
          As Seen On
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/faq" color="transparent" className={classes.navLink}>
          FAQ
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          className={classes.discord}
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/N7tWFsdPUJ"
        >
          <img
            src={discordImg}
            style={{ width: "17px", height: "17px", marginRight: "4px" }}
          />
          Join Discord
        </a>
      </ListItem>
    </List>
  );
}
