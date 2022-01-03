import React, { useState } from "react";
import styles from "./index.module.scss";
import RarityMapping from "./mapping";

import Image from "./nftImage";

const getRarityData = (id) => {
  return RarityMapping.find((traits) => traits[1] == id) || [];
};

const Rarity = () => {
  const [rarityData, setRarityData] = useState(getRarityData(null));
  const [madtrooperID, setMadtrooperID] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setFirstLoad(false);
      setRarityData(getRarityData(e.target.value));
    }
  };

  let imageURL =
    "https://edda-cdn.fra1.cdn.digitaloceanspaces.com/madtrooper/default.jpeg";
  if (!firstLoad && rarityData) {
    imageURL = `https://edda-cdn.fra1.cdn.digitaloceanspaces.com/madtrooper-nfts/${rarityData[1]}.png`;
  }

  return (
    <div className={styles.containerWrapper} id="rarity">
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.headline}>
            <div className={styles.content}>Rarity</div>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input
            id="madtrooper_id"
            type="madtrooper_id"
            name="madtrooper_id"
            value={madtrooperID}
            placeholder="Enter your MadTrooper ID"
            className={styles.input}
            onKeyDown={(e) => _handleKeyDown(e)}
            onChange={(e) => {
              let inputText = e.target.value;
              inputText = inputText.replace(/\D/g, "");
              setMadtrooperID(inputText);
            }}
          />
          <button
            className={styles.button}
            onClick={() => {
              setFirstLoad(false);
              setRarityData(getRarityData(madtrooperID));
            }}
          >
            Submit
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <Image src={imageURL} className={styles.image} />

            <p className={styles.rarityValue}>
              {!firstLoad ? rarityData[0] || "Not found" : "#0"}
            </p>
            <p className={styles.rarityText}>Rarity Rank</p>
          </div>

          <div className={styles.attrListContainer}>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>Type</p>
              <p className={styles.traitValue}>{rarityData[2] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>Theme</p>
              <p className={styles.traitValue}>{rarityData[3] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>Background</p>
              <p className={styles.traitValue}>{rarityData[4] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>1st Accessory</p>
              <p className={styles.traitValue}>{rarityData[5] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>2nd Accessory</p>
              <p className={styles.traitValue}>{rarityData[6] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>1st Weapon</p>
              <p className={styles.traitValue}>{rarityData[7] || "???"}</p>
            </div>
            <div className={styles.attrContainer}>
              <p className={styles.traitTitle}>2nd Weapon</p>
              <p className={styles.traitValue}>{rarityData[8] || "???"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
