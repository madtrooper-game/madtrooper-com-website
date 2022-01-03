import styles from "./index.module.scss";
import DiscordBtn from "./discord.jsx";
const faqs = [
  {
    id: 1,
    question: "What are Mad Troopers about?",
    answer:
      "MadTroopers are a set of 3,489 NFTs minted on the Solana blockchain. This army of legendary space warriors is fighting for the very fate of the human race. MadTrooper includes 360 Degree VR NFTs, Merchandising and also a MadTrooper based Video Game.",
  },
  {
    id: 2,
    question: "When was the MadTroopers mint?",
    answer: (
      <p>
        Mint was on{" "}
        <span className={styles["bold-text"]}>September 24th, 5:55 PM CET</span>{" "}
      </p>
    ),
  },
  {
    id: 3,
    question: "What was the maximum possible supply for MadTroopers?",
    answer: (
      <p>
        During the minting phase, a total of 3,489 MadTroopers were minted and
        the rest were burnt 🔥 !
      </p>
    ),
  },
  {
    id: 4,
    question: "What will be the minting price?",
    answer: (
      <p>
        Each Mad trooper was <span className={styles["bold-text"]}>2 $SOL</span>
      </p>
    ),
  },
  {
    id: 5,
    question: "How were Mad Troopers launched?",
    answer: (
      <>
        <p>
          The Mad Troopers will be minted on{" "}
          <a
            href="https://madtrooper.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://madtrooper.com
          </a>{" "}
          , shortly after which they were listed and verified on 4 secondary
          marketplaces:
        </p>
        <div className={styles.websiteList}>
          <div className={styles.website}>
            <a
              href="https://digitaleyes.market/collections/MadTrooper"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteText}
            >
              <span>Digital Eyes</span>
            </a>
          </div>
          <div className={styles.website}>
            <a
              href="https://solshop.io/explore?collection_id=22"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteText}
            >
              <span>SolShop</span>
            </a>
          </div>
          <div className={styles.website}>
            <a
              href="https://www.magiceden.io/marketplace?collection_symbol=mad_trooper"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteText}
            >
              <span>Magic Eden</span>
            </a>
          </div>
          <div className={styles.website}>
            <a
              href="https://solsea.io/collection/614e29f0ac0362e2c76ab55e"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteText}
            >
              <span>SolSea</span>
            </a>
          </div>
        </div>
        <p>Conversations about listing with Solanart are ongoing!</p>
      </>
    ),
  },
  {
    id: 6,
    question: "What wallet should I use to buy on those 4 marketplaces?",
    answer:
      "Any wallet that is supported by them, although we recommend Phantom wallet.",
  },
  {
    id: 9,
    question: "How do I know how rare my Mad Trooper is?",
    answer: (
      <>
        <p>
          The rarity of the Mad Troopers is based on the category under which
          your Mad Trooper falls. The categories are clearly defined on{" "}
          <a
            href="https://madtrooper.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://madtrooper.com
          </a>{" "}
          , the standing in terms of rarity is Legendary Masters {">"}{" "}
          Commanders {">"}
          Sergeants {">"} Troopers . The troopers hold the classic colt and the
          diamond axe, the sergeants hold the trooper revolver and the diamond
          axe, the commanders hold the galactic gun and the disc of death while
          the legendary masters hold the galactic gun and the laser spear. Apart
          from this, Golden accessories or golden weapons further increase the
          rarity of the trooper! Attributes can easily be viewed on your Solana
          wallets.{" "}
        </p>
        <p>
          Also, we are working with Rarity Tool on providing a tool for
          calculating rarity (
          <a
            href="https://howrare.is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://howrare.is
          </a>
          )
        </p>
      </>
    ),
  },
  {
    id: 13,
    question: "How many attributes are there?",
    answer:
      "Each trooper will have 2 unique accessories (each theme has 8 sets of accessories), 2 unique weapons (there are 6 weapons in total), a unique background, a specific type (the categorization of trooper, sergeant, commander and legendary master) and a specific theme (there are 5 themes).",
  },
  {
    id: 12,
    question: "Are there any giveaways in Discord? ",
    answer: (
      <p>
        Yes! Check out <DiscordBtn>#🎉-giveaways</DiscordBtn> for more
        information.
      </p>
    ),
  },
];

export default faqs;
