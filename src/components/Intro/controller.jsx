import React from "react";

import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Back from "@material-ui/icons/NavigateBefore";
import Next from "@material-ui/icons/NavigateNext";

const NavButton = withStyles({
  root: {
    color: "white",
  },
})(IconButton);

import styles from "./index.module.scss";

import IntroVideoList from "./introVideo";

const Controller = (props) => {
  const { index, slider } = props;
   
  let firstItemStyle = {};
  let secondItemStyle = {};
  
  if (index == 1) {
    secondItemStyle = { fontWeight: "bold" };
    firstItemStyle = {};
  } else {
    firstItemStyle = { fontWeight: "bold" };
    secondItemStyle = {};
  }

  return (
    <div className={styles.controller} >
      <NavButton onClick={() =>  index && slider && slider.goBack()}>
        <Back />
      </NavButton>
      <Button onClick={() => index &&  slider && slider.goBack()} >
        <p className={styles.navItem} style={firstItemStyle}>
          {IntroVideoList[0].navText}
        </p>
      </Button>
      <hr className={styles.line} />
      <Button onClick={() => !index  && slider && slider.goNext()} >
        <p className={styles.navItem} style={secondItemStyle}>
          {IntroVideoList[1].navText}
        </p>
      </Button>
      <NavButton onClick={() => !index  && slider && slider.goNext()}>
        <Next />
      </NavButton>
    </div>
  );
};

export default Controller;
