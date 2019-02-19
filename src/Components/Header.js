import React from "react";
import Typography from "../../node_modules/@material-ui/core/Typography";

const styles = {
  headerStyles: {
    color: "#d6d7d8",
    fontWeight: "100",
    textAlign: "center"
  },
  formatHeader: {
    paddingTop: "7%"
  }
};

const Header = () => (
  <div style={styles.formatHeader}>
    <Typography style={styles.headerStyles} variant="display3">
      Hello
    </Typography>
    <Typography style={styles.headerStyles} variant="headline">
      Some of my Work
    </Typography>
  </div>
);

export default Header;
