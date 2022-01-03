import React, { useRef } from "react";
import classnames from "classnames";
import { useInViewport } from "ahooks";

import roadmaps from "./roadmaps";
import styles from "./index.module.scss";

const RoadMapItem = ({
  image,
  time,
  title,
  description,
  className,
  roadMapKey,
}) => {
  return (
    <div className={classnames(className, styles["roadmap-item"])}>
      <div>
        <img className={styles.image} src={image} />
      </div>
      <div>
        <div className={styles.time}>{time}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

const RoadMap = () => {
  const ref = useRef();
  const inViewPort = useInViewport(ref);
  return (
    <div className={styles.wrapper}>
      <div id="roadmap" ref={ref} className={styles["roadmap-container"]}>
        <div className={styles["roadmap-title"]}>ROADMAP</div>
        <div>
          {inViewPort
            ? roadmaps.map((roadmap, key) => {
                return <RoadMapItem {...roadmap} roadMapKey={key} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
