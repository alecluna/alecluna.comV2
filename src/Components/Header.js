import React from "react";
import Typography from "../../node_modules/@material-ui/core/Typography";

const styles = {
  headerStyles: {
    color: "white",
    fontWeight: "100",
    textAlign: "center"
  },
  formatHeader: {
    paddingTop: "10%"
  }
};

const Header = () => (
  <div style={styles.formatHeader}>
    <Typography style={styles.headerStyles} variant="display2">
      Hello
    </Typography>
    <Typography style={styles.headerStyles} variant="headline">
      Here is some of my Work
    </Typography>
  </div>
);

export default Header;
