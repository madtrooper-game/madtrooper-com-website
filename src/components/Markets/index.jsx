import React from "react";

import styles from "./index.module.scss";

import MarketCard from "./markets";

import list from "./list.jsx";

const AsSeenOn = () => {
  return (
    <div style={{ backgroundColor: "black" }} id="buy_now">
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.headline}>
            <div className={styles.content}>Buy Now</div>
          </div>
        </div>
        <div className={styles.itemList}>
            {list.map((item, key)=> {
              return <MarketCard key={`as-seen-on-item-${key}`} {...item} className={styles.item}/>
            })}
        </div>
      </div>
    </div>
  );
};

export default AsSeenOn;
