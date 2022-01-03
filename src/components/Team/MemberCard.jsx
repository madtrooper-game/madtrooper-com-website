import React, { useState } from "react";
import classnames from "classnames";
import ReactDom from "react-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { isMobile } from "react-device-detect";

import styles from "./index.module.scss";

import back from "assets/img/team/back.png";

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDisableFlipFront, setIsDisableFlipFront] = useState(false);

  const flip = () => {
    const _isFlipped = isFlipped;
    setIsFlipped(!isFlipped);
    if (isMobile) {
      const front = document.querySelector(`#flip-front-${member.id}`);
      const back = document.querySelector(`#flip-back-${member.id}`);

      if (_isFlipped) {
        document.querySelector(
          `#flip-card-${member.id}`
        ).style.height = `${front.clientHeight}px`;
      } else {
        document.querySelector(
          `#flip-card-${member.id}`
        ).style.height = `${back.clientHeight}px`;
      }
    }
  };
  const disableFlip = () => setIsDisableFlipFront(!isDisableFlipFront);

  return (
    <div
      className={styles["member-card"]}
      key={member.id}
      onMouseEnter={() => {
        if (!isMobile) {
          flip();
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          flip();
        }
      }}
      onClick={() => {
        if (isMobile) {
          flip();
        }
      }}
    >
      <div
        className={classnames({
          [styles["flip-card"]]: true,
          [styles["flipped"]]: isFlipped || isDisableFlipFront,
        })}
        id={`flip-card-${member.id}`}
      >
        <div
          className={classnames({ [styles.back]: true })}
          onClick={() => {
            if (!isMobile) {
              disableFlip();
            } else {
              flip();
            }
          }}
          id={`flip-back-${member.id}`}
          style={{
            height: isMobile ? "auto" : "100%",
          }}
        >
          <div
            className={classnames({
              [styles.quote]: true,
            })}
            style={{ backgroundImage: `url('${back}')` }}
          >
            <h3 className={styles.name}>{member.name}</h3>
            {member.quote}
          </div>
        </div>
        <img
          className={classnames({
            [styles.front]: true,
          })}
          src={member.image}
          id={`flip-front-${member.id}`}
        />
      </div>
    </div>
  );
};

export default MemberCard;
