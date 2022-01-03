const componentsStyle = {
  container: {
    backgroundColor: "#000",
    padding: "100px 200px",
  },
  content: {
    fontFamily: "Exo2",
    color: "white",
    fontSize: "16px",
  },
  header: {
    textAlign: "center",
  },
  contentText: {
    fontSize: "16px",
  },
  "@media screen and (max-width: 960px)": {
    container: {
      padding: "100px 50px",
    },
    content: {
      flexDirection: "column-reverse",
    },
    contentLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    brand: {
      textAlign: "center",
    },
    banner: {
      top: "150x",
      width: "60%",
    },
  },

  "@media screen and (max-width: 480px)": {
    title: {
      fontSize: "24px",
      lineHeight: "24px",
    },
    title2: {
      fontSize: "24px",
      lineHeight: "24px",
      marginTop: "150px",
    },
    brand: {
      padding: "0 15px",
    },
  },
};

export default componentsStyle;
