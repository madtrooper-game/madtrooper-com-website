import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  containerWrapper: {
    filter: "brightness(0.9)",

    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(${
      require("assets/img/BG.png").default
    }) #000`,

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  contentLeft: {
    flexShrink: "1",
    padding: "0 50px",
    flex: 1,
  },
  container: {
    maxWidth: "1980px",
    margin: "0 auto",
    padding: "150px 40px 0px 40px",
    "@media screen and (max-width: 480px)": {
      padding: "40px 20px",
    },
  },
  brand: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0px 0px 40px",
    flex: "1",
  },
  title2: {
    fontFamily: "Exo2",
    fontSize: "46px",
    lineHeight: "48px",
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: "10px",
    "@media screen and (max-width: 1024px)": {
      display: "none",
    },
    // color: "transparent",
    // textStroke: "1px white",
    // textShadow: "none",
  },
  title3: {
    fontFamily: "Exo2",
    marginBottom: "30px",
    color: "#FFF",
    // color: "transparent",
    // textStroke: "1px white",
    // textShadow: "none",
  },
  description: {
    fontSize: "16px !important",
    lineHeight: "20px",
    marginTop: "40px",
    p: {
      fontSize: "16px",
    },
  },
  title: {
    fontFamily: "Exo2",
    fontSize: "60px",
    lineHeight: "64px",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Exo2",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    margin: "40px 0",
    textAlign: "center",
    minWidth: "311px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  instaButton: {
    borderRadius: "8px",
    width: "80px",
    // margin: "20px",
    color: "white",
    backgroundColor: "#a93bc0",
    "&:hover": {
      color: "white",
      backgroundColor: "#a93bc0",
    },
    "&:visited": {
      color: "white",
      backgroundColor: "#a93bc0",
    },
  },
  discordButton: {
    borderRadius: "8px",
    width: "80px",
    // margin: "20px",
    color: "white",
    backgroundColor: "#a93bc0",
    "&:hover": {
      color: "white",
      backgroundColor: "#a93bc0",
    },
    "&:visited": {
      color: "white",
      backgroundColor: "#a93bc0",
    },
  },
  twitterButton: {
    borderRadius: "8px",
    width: "80px",
    // margin: "20px",
    backgroundColor: "#a93bc0",
    "&:hover": {
      backgroundColor: "#a93bc0",
    },
    "&:visited": {
      backgroundColor: "#a93bc0",
    },
  },
  social: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    margin: "20px auto 0px auto",
  },
  becomeMadtrooper: {
    margin: "60px 0px 20px 0px",
    fontSize: "30px",
    lineHeight: "30px",
  },

  socialText: {
    color: "white",
    "&:visited": {
      color: "white",
    },
  },

  _banner: {
    width: "100%",
    padding: "20px 15px",
    flex: 1,
  },
  bannerContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    paddingTop: "200px",
  },
  banner: {
    position: "relative",
    width: "100%",
    height: "auto",
  },
  rightContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  comingSoon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0px",
    fontFamily: "Exo",
    fontSize: "16px",
    lineHeight: "16px",
    fontStyle: "italic",
    fontWeight: "400",
    color: "gray",
    margin: "0 auto",

    "@media screen and (max-width: 960px)": {
      // flexDirection: 'column',
      justifyContent: "center",
      fontSize: "20px",
      marginTop: "20px",
    },

    "@media screen and (max-width: 960px)": {
      padding: "20px",
    },
  },

  "@media screen and (max-width: 1024px)": {
    content: {
      flexDirection: "column-reverse",
    },
    brand: {
      textAlign: "center",
    },
    banner: {
      top: "150x",
      width: "80%",
    },
  },

  "@media screen and (max-width: 480px)": {
    title: {
      fontSize: "24px",
      lineHeight: "24px",
    },
    title2: {
      fontSize: "36px",
      lineHeight: "36px",
      marginTop: "100px",
    },
    brand: {
      padding: "0 15px",
    },
  },

  solanaImage: {
    width: "36px",
    height: "auto",
    // margin: "0px 25px",
    borderRadius: "10px",
    color: "gray",
    marginRight: "10px",
    "@media screen and (max-width: 480px)": {
      height: "auto",
      width: "24px",
      // margin: "5px 25px",
    },
  },

  snackbar: {
    backgroundColor: "#A93BC0",
    padding: "20px",
    color: "#fff",
    // borderRadius: "12px",
    fontWeight: "bold",
  },

  topRight: {
    top: "80px",
  },

  socialTextDiscord: {},
};

export default componentsStyle;
