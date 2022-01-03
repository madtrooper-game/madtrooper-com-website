import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-slideshow-image";

import styles from "./index.module.scss";
import IntroVideoList from "./introVideo";
import Controller from "./controller";

import "react-slideshow-image/dist/styles.css";

import { MOBILE_WIDTH, getWindowDimensions } from "../../utils";

const customStyle = {
  slideContainer: {
    width: "100vw",
    height: "100vh",
  },
  youtube: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    borderRadius: "8px",
    width: "220px",
    textDecoration: "none",
    margin: "10px 20px 10px 0px",
    display: "inline-flex",
    backgroundColor: "#a93bc0",
    color: "#fff",
    "&:hover,&:focus": {
      color: "inherit",
      opacity: 0.7,
    },
  },
  staking: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    borderRadius: "8px",
    width: "310px",
    textDecoration: "none",
    margin: "10px 20px 10px 0px",
    display: "inline-flex",
    backgroundColor: "#a93bc0",
    color: "#fff",
    "&:hover,&:focus": {
      color: "inherit",
      opacity: 0.7,
    },
  },
};

const IntroVideo = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  let _faceStyle = {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const { width } = getWindowDimensions();
  if (width < MOBILE_WIDTH) {
    _faceStyle.backgroundPosition = "35% center";
  }

  useEffect(() => {
    setIndex(1);
  }, []);
  return (
    <div className={styles.container}>
      <div style={customStyle.slideContainer}>
        <div className={styles.controllerContainer}>
          <Controller
            index={!index ? 1 : 0}
            slider={sliderRef && sliderRef.current}
          />
        </div>
        <Fade
          arrows={false}
          duration={3000}
          onChange={(newIndex, oldIndex) => {
            setIndex(newIndex);
          }}
          ref={sliderRef}
        >
          {IntroVideoList.map((slideImage, index) => {
            return (
              <div
                key={index}
                style={{
                  background: `url("${slideImage.image}") no-repeat`,
                  ..._faceStyle,
                }}
              >
                <div className={styles.contentContainer}>
                  <p className={styles.title}>{slideImage.title} </p>
                  <p className={styles.subTitle}>{slideImage.subTitle} </p>
                  <p className={styles.desc}>{slideImage.desc} </p>
                  <a
                    style={customStyle.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={slideImage.url}
                  >
                    <i className={styles.socials + " fab fa-youtube"} />
                    <p className={styles.youtubeText}>WATCH NOW</p>
                  </a>
                  <a
                    style={customStyle.staking}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://staking.madtrooper.com'}
                  >
                    <p className={styles.youtubeText}>Stake your MadTrooper</p>
                  </a>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default IntroVideo;
