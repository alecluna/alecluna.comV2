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
              Technologies
            </Typography>
            <ReactSVG svgStyle={{ width: 50, height: 50 }} src={props.logo} />
            <ReactSVG svgStyle={{ width: 50, height: 50 }} src={props.logo2} />
            <ReactSVG svgStyle={{ width: 50, height: 50 }} src={props.logo3} />
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default CardComponent;
