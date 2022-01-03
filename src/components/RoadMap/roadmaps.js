import image1 from "assets/img/roadmap/1.png";
import image2 from "assets/img/roadmap/2.png";
import image3 from "assets/img/roadmap/3.png";
import image4 from "assets/img/roadmap/4.png";
import styles from "./index.module.scss";

const roadmaps = [
  {
    image: image1,
    time: "Sep 2021",
    title: "MadTroopers Website Launch",
    description: "MadTrooper NFTs showcased and rarities revealed",
    className: styles["roadmap-item-0"],
    key: 0,
  },
  {
    image: image3,
    time: "Sep 2021",
    title: "MadTroopers Launch",
    description: (
      <div>
        The MadTrooper Army assembles! 3489 MadTrooper NFTs minted and
        "verifeyed" on{" "}
        <a
          target="_blank"
          href="https://digitaleyes.market/collections/MadTrooper"
          className={styles.linkText}
        >
          DigitalEyes
        </a>
      </div>
    ),
    className: styles["roadmap-item-1"],
    key: 1,
  },
  {
    image: image4,
    time: "Sep 2021",
    title: "MadTrooper Soundtrack",
    description: "MadTrooper Official Soundtrack",
    className: styles["roadmap-item-2"],
    key: 2,
  },
  {
    image: image2,
    time: "Oct 2021",
    title: "MadTroopers Airdrop",
    description: (
      <div>
        MadTrooper NFTs will be airdropped to random, lucky holders of{" "}
        <a
          target="_blank"
          href="https://www.degenape.academy"
          className={styles.linkText}
        >
          DegenApes Academy NFTs
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://eddaswap.com"
          className={styles.linkText}
        >
          EDDA Tokens
        </a>
      </div>
    ),
    className: styles["roadmap-item-3"],
    key: 3,
  },
  {
    image: image1,
    time: "Dec 2021",
    title: "MadTroopers Merchandise",
    description: "Exclusive MadTroopers Merchandise",
    className: styles["roadmap-item-4"],
    key: 4,
  },
  {
    image: image3,
    time: "Dec 2021",
    title: "360-VR NFTs",
    description: "Ultra-rare, 360-VR MadTrooper NFTs",
    className: styles["roadmap-item-5"],
    key: 5,
  },
  {
    image: image4,
    time: "Christmas 2021",
    title: "MadTrooper Staking",
    description: "First of its kind, Solana NFT Staking Platform",
    className: styles["roadmap-item-6"],
    key: 6,
  },
  {
    image: image1,
    time: "Q1 2022",
    title: "MadTrooper Game",
    description: "MadTroopers Video Game",
    className: styles["roadmap-item-7"],
    key: 7,
  },
  
];

export default roadmaps;
