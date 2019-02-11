import React from "react";
import CardComponent from "../CardComponent";
import techPlaceHolder from "../../assets/techPlaceHolder.jpeg";
import ReactLogo from "../../assets/React-icon.svg";

const listofProjects = [
  { id: 1, title: "Crowdplay", logo: ReactLogo },
  {
    id: 2,
    title: "WalkStevensFitness",
    logo: ReactLogo
  },
  {
    id: 3,
    title: "printworksapparel",
    logo: ReactLogo
  },
  {
    id: 4,
    title: "Basic Weather App",
    logo: ReactLogo
  }
];

const CardComponentContainer = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}
  >
    {listofProjects.map((projects, index) => {
      return (
        <div key={projects.id}>
          <CardComponent
            image={techPlaceHolder}
            text={projects.title}
            logo={projects.logo}
          />
        </div>
      );
    })}
  </div>
);

export default CardComponentContainer;
