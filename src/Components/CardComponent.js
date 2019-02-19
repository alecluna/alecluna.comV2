import React from "react";
import Card from "../../node_modules/@material-ui/core/Card";
import Typography from "../../node_modules/@material-ui/core/Typography";
import CardContent from "../../node_modules/@material-ui/core/CardContent";
import Image from "../Components/Image";
import ReactSVG from "react-svg";

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
  },
  imageStyle: {
    width: "300px",
    heigh: "200px"
  }
};

const CardComponent = ({ ...props }) => {
  return (
    <div style={styles.card}>
      <a style={{ textDecoration: "none" }} href={props.linkto}>
        <Card>
          <img
            style={styles.imageStyle}
            src={props.image}
            alt="Project Portfolio"
          />
          <Image image={`image${props.image}`} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.title}
            </Typography>
            <Typography gutterBottom component="h2">
              Technologies <ReactSVG src={props.logo} /> {props.logo2}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};
export default CardComponent;
