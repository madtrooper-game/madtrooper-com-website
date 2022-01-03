import React from "react";

import images from "./nfts";
import styles from "./index.module.scss";

import background from "assets/img/background/nft.png";

const NFTList = () => {
  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url("${background}") #000`,
      }}
    >
      <div className={styles.title}>
        <div className={styles["light-text"]}>Salute The</div>
        <div className={styles["bold-text"]}>Madtrooper</div>
      </div>
      <div className={styles.subTitle}>
        3489 MadTroopers set out conquering the realm of NFTs, but not all
        MadTroopers are the same…
      </div>
      <div style={{ height: "50px" }}></div>
      <div className={styles["nfts-container"]}>
        {images.map((image) => {
          return (
            <div className={styles["nft-card"]} key={image.id}>
              <img className={styles.image} src={image.image} />
              <div>
                <h3 className={styles.title}>{image.title}</h3>
                <div className={styles.description}>{image.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NFTList;
