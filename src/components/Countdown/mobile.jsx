import React, { useState } from "react";
import { useSetState, useInterval } from "ahooks";
import classnames from "classnames";

import styles from "./mobile.module.scss";

import clock from "assets/img/clock.svg";

const _1SEC = 1000;
const _1MIN = _1SEC * 60;
const _1HOUR = _1MIN * 60;
const _1DAY = _1HOUR * 24;

const render = (num) => {
  return num > 10 ? num : `0${num}`;
};

const Countdown = ({ className }) => {
  const deadline = new Date(Date.UTC(2021, 8, 24, 15, 55, 0)).getTime();
  const [countdown, setCountdown] = useSetState({
    hour: 0,
    day: 0,
    minute: 0,
    second: 0,
  });
  const [interval, setInterval] = useState(0);

  useInterval(() => {
    const now = new Date().getTime();
    const distance = deadline - now;
    if (distance < 0) {
      setInterval(null);
      return;
    }
    setCountdown({
      day: Math.floor(distance / _1DAY),
      hour: Math.floor((distance % _1DAY) / _1HOUR),
      min: Math.floor((distance % _1HOUR) / _1MIN),
      second: Math.floor((distance % _1MIN) / _1SEC),
    });
  }, interval);

  return interval !== null ? (
    <div className={classnames(styles["container"], className)}>
      <div className={styles.wrapper}>
        <div id="_countdown" className={styles.countdown}>
          <div>
            <img src={clock} />
          </div>
          <div className={styles.number}>{render(countdown.day)}d</div>
          <div className={styles.number}>{render(countdown.hour)}h</div>
          <div className={styles.number}>{render(countdown.min)}m</div>
          <div className={styles.number}>{render(countdown.second)}s</div>
        </div>
        <div className={styles.date}>September 24, 5:55PM CET</div>
      </div>
    </div>
  ) : null;
};

export default Countdown;
