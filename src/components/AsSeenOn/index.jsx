import React from "react";

import styles from "./index.module.scss";

import AsSeenOnCard from "./asSeenOn";

import list from "./list.jsx";

const AsSeenOn = () => {
  return (
    <div style={{ backgroundColor: "#0e0e0e" }} id="as_seen_on">
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.headline}>
            <div className={styles.content}>As seen on</div>
          </div>
        </div>
        <div className={styles.itemList}>
            {list.map((item, key)=> {
              return <AsSeenOnCard key={`as-seen-on-item-${key}`} {...item} className={styles.item}/>
            })}
        </div>
      </div>
    </div>
  );
};

export default AsSeenOn;
