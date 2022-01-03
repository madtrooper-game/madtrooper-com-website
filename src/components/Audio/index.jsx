import React from "react";

import styles from "./index.module.scss";

import SoundTrack from "./SoundTrack";

import audios from "./audio";

const Audio = () => {
  return (
    <div style={{ backgroundColor: "#0e0e0e" }} id="soundtrack">
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.headline}>
            <div className={styles.content}>Immerse yourself</div>
            <div className={styles.content}>
              in the <span className={styles.bold}>Mad Trooper universe</span>
            </div>
          </div>
          <div className={styles.description}>
            Become a part of the Mad Trooper universe with the official
            soundtrack below
          </div>
        </div>
        {audios.map((audio) => {
          return <SoundTrack {...audio} style={{ marginBottom: "80px" }} />;
        })}
      </div>
    </div>
  );
};

export default Audio;
