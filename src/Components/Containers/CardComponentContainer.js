import React from "react";
import CardComponent from "../CardComponent";
import techPlaceHolder from "../../assets/techPlaceHolder.jpeg";

const listofProjects = [
  {
    id: 1,
    title: "Crowdplay",
    logo: "react",
    logo2: "nodejs",
    linkto: "https://crowdplay-music-sharing.herokuapp.com/"
  },
  {
    id: 2,
    title: "WalkStevensFitness",
    logo: "gatsby",
    linkto: "https://friendly-neumann-6c1095.netlify.com/"
  },
  {
    id: 3,
    title: "printworksapparel",
    logo: "react",
    linkto: ""
  },
  {
    id: 4,
    title: "Basic Weather App",
    logo: "react",
    linkto: ""
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
    {listofProjects.map(projects => {
      return (
        <div key={projects.id}>
          <CardComponent
            image={techPlaceHolder}
            text={projects.title}
            logo={projects.logo}
            logo2={projects.logo2}
          />
        </div>
      );
    })}
  </div>
);

export default CardComponentContainer;
