import { defaultFont } from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    fontFamily: "Exo2",
    
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.8375rem",
    fontWeight: "900",
    fontSize: "16px",
    fontFamily: "Exo2",
    fontStyle: "normal",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20.44px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "14px",
      padding: "0.7375rem",
    },

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },

  comingSoon: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-end",
    // padding: "20px 0px",
    fontFamily: "Exo",
    fontSize: "16px",
    lineHeight: "16px",
    fontStyle: "italic",
    fontWeight: "400",
    color: "gray",
    height: "50px",
    marginLeft: "40px",
    color: "#fff",
  },

  solanaImage: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    marginRight: "10px",
  },

  discord: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "900",
    fontSize: "16px",
    fontFamily: "Exo2",
    fontStyle: "normal",
    textTransform: "uppercase",
    borderRadius: "8px",
    lineHeight: "20.44px",
    textDecoration: "none",
    margin: "0px",
    marginLeft: '20px',
    display: "inline-flex",
    backgroundColor: "#a93bc0",
    color: "#fff",
    "&:hover,&:focus": {
      color: "inherit",
      // background: "rgba(200, 200, 200, 0.2)",
      opacity: 0.7,
      
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "14px",
      marginLeft: '0px',
      padding: "0.7375rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },


  buynow: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    paddingBottom: "0.9475rem",
    fontWeight: "900",
    fontSize: "16px",
    fontFamily: "Exo2",
    fontStyle: "normal",
    textTransform: "uppercase",
    borderRadius: "8px",
    lineHeight: "20.44px",
    textDecoration: "none",
    margin: "0px",
    
    display: "inline-flex",
    backgroundColor: "white",
    color: "#A93BC0",
    "&:hover,&:focus": {
      color: "#A93BC0",
      opacity: 0.9,
      
    },
    "@media screen and (max-width: 1024px)": {
      fontSize: "14px",
      marginLeft: '0px',
      padding: "0.7375rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },

});

export default headerLinksStyle;
