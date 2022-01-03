import React from "react";

import styles from "./index.module.scss";

import teams from "./team.jsx";

import Member from "./MemberCard";

import { isMobile } from "react-device-detect";

const Team = () => {
  return (
    <div className={styles.container} id="about" style={{}}>
      <div className={styles["team-container"]}>
        <div className={styles["mask"]}>
          <div className={styles["intro-box"]}>
            <div className={styles["team-intro"]}>
              <div className={styles.title}>
                Mad Troopers <span style={{ fontWeight: 900 }}>Team</span>
              </div>
              <div className={styles.content}>
                MadTrooper has been created by the team behind{" "}
                <a
                  href="https://eddaswap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["eddaswap-text"]}
                >
                  EDDASwap
                </a>
                , a leading multi-chain ecosystem of NFT and DeFi platforms.
                With a highly successful and established track record in the NFT
                space, the team comprises of established NFT artists,
                developers, and digital art connoisseurs.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.members}>
          {teams.map((member) => {
            return <Member member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
