import React from "react";
import CardComponent from "../CardComponent";
import techPlaceHolder from "../../techPlaceHolder.jpeg";

const listofProjects = [
  "Crowdplay",
  "WalkStevensFitness",
  "printworksapparel",
  "Basic Weather App"
];

const CardComponentContainer = () => (
  <div>
    {listofProjects.map((projects, index) => {
      return (
        <div
          key={index.toString()}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <CardComponent image={techPlaceHolder} text={projects} />
        </div>
      );
    })}
  </div>
);

export default CardComponentContainer;
