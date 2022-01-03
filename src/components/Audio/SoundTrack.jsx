import React, { useEffect, useState } from "react";

import styles from "./SoundTrack.module.scss";

import DownloadIcon from "assets/img/download.png";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./custom.css";
const SoundTrack = ({
  title,
  description,
  thumbnail,
  downloadUrl,
  url,
  style = {},
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={styles.container} key={title} style={style}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} />
      </div>
      <div className={styles.track}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
        <a
          className={styles.download}
          target="_blank"
          rel="noreferrer noopener"
          href={url}
        >
          <img src={DownloadIcon} style={{ marginRight: "16px" }} />
          Download
        </a>

        <div className={styles.mobile}>
          <div className={styles["mobile-title"]}>{title}</div>
          {" - "}
          <div className={styles["mobile-desc"]}>{description}</div>
        </div>
        <AudioPlayer
          src={url}
          className={isPlaying ? "audio_playing" : ""}
          showJumpControls={false}
          showSkipControls={false}
          hasDefaultKeyBindings={false}
          layout="horizontal"
          customControlsSection={["MAIN_CONTROLS"]}
          onPlay={() => {
            const playings = document.getElementsByClassName("audio_playing");
            if (playings && playings.length) {
              for (let i = 0; i < playings.length; i++) {
                playings[i].getElementsByTagName("audio")[0].pause();
              }
            }
            setIsPlaying(true);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
};

export default SoundTrack;
