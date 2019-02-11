import React from "react";
import Typography from "../../node_modules/@material-ui/core/Typography";

const styles = {
  headerStyles: {
    color: "white",
    fontWeight: "200",
    textAlign: "center"
  },
  formatHeader: {
    marginTop: "10%"
  }
};

const Header = () => (
  <div>
    <Typography style={styles.headerStyles} variant="display2" component="h2">
      Hello
    </Typography>
  </div>
);

export default Header;
