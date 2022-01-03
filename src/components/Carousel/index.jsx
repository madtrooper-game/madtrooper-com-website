import React, { useState, useEffect } from "react";
import classnames from "classnames";

import { nfts } from "./nfts";
import { useDebounceFn } from "ahooks";

import styles from "./index.module.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const calculate = (index, current) => {
  const res = (index - current) % 5;
  return res > 0 ? res : res + 5;
};

const ActiveTab = () => {
  return <div className={styles["active-indicator"]}></div>;
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const { run: onNext } = useDebounceFn(
    () => {
      let newCurrent = current + 1;
      if (newCurrent > 4) {
        newCurrent = 0;
      }
      setCurrent(newCurrent);
    },
    { wait: 300 }
  );

  useEffect(() => {
    if (!intervalID) {
      const _intervalID = setInterval(() => {
        onNext();
      }, 3000);
      setIntervalID(_intervalID);
    }
  });

  const { run: onPrev } = useDebounceFn(
    () => {
      let newCurrent = current - 1;
      if (newCurrent < 0) {
        newCurrent = 4;
      }
      setCurrent(newCurrent);
    },
    { wait: 300 }
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {nfts.map((nft) => {
            return (
              <div
                key={nft.id}
                className={classnames({
                  [styles["carousel-item"]]: true,
                  [styles[`carousel-item-${calculate(nft.id, current)}`]]: true,
                  [styles["active"]]: current + 1 === nft.id,
                })}
              >
                <img src={nft.image} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.indicator}>
        {current % 5 !== 0 ? (
          <div
            className={styles.number}
            onClick={() => {
              setCurrent(0);
            }}
          >
            01
          </div>
        ) : (
          <div className={styles.activeBox}>
            <ActiveTab />
          </div>
        )}
        {current % 5 !== 1 ? (
          <div className={styles.number} onClick={() => setCurrent(1)}>
            02
          </div>
        ) : (
          <div className={styles.activeBox}>
            <ActiveTab />
          </div>
        )}
        {current % 5 !== 2 ? (
          <div className={styles.number} onClick={() => setCurrent(2)}>
            03
          </div>
        ) : (
          <div className={styles.activeBox}>
            <ActiveTab />
          </div>
        )}
        {current % 5 !== 3 ? (
          <div className={styles.number} onClick={() => setCurrent(3)}>
            04
          </div>
        ) : (
          <div className={styles.activeBox}>
            <ActiveTab />
          </div>
        )}
        {current % 5 !== 4 ? (
          <div className={styles.number} onClick={() => setCurrent(4)}>
            05
          </div>
        ) : (
          <div className={styles.activeBox}>
            <ActiveTab />
          </div>
        )}
      </div>
      <div
        className={classnames(styles.arrow, styles["arrow-right"])}
        onClick={() => onNext()}
      >
        <ArrowForwardIosIcon />
      </div>
      <div
        className={classnames(styles.arrow, styles["arrow-left"])}
        onClick={() => onPrev()}
      >
        <ArrowBackIosIcon />
      </div>
    </div>
  );
};

export default Carousel;
