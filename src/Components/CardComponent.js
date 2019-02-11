import React from "react";
import Card from "../../node_modules/@material-ui/core/Card";
import Typography from "../../node_modules/@material-ui/core/Typography";
import CardContent from "../../node_modules/@material-ui/core/CardContent";

const styles = {
  card: {
    maxWidth: 400,
    alignSelf: "center",
    margin: "20px"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  links: {
    color: "black",
    textDecoration: "none",
    fontFamily: "Roboto",
    fontSize: "28px"
  }
};

const CardComponent = ({ image, text, logo }) => (
  <div style={styles.card}>
    <Card className="grow">
      <img src={image} alt="Project Portfolio" />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {text}
        </Typography>
        <Typography gutterBottom component="h2">
          Technologies {logo}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default CardComponent;
