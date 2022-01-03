import React from "react";

import styles from "./index.module.scss";

const DiscordBtn = ({ children }) => {
  return (
    <a
      className={styles["color-text"]}
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.gg/N7tWFsdPUJ"
    >
      {children || "MadTrooper Discord"}
    </a>
  );
};

export default DiscordBtn;
