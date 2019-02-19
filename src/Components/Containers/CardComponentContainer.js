import React from "react";
import CardComponent from "../CardComponent";

const listofProjects = [
  {
    id: 1,
    title: "Crowdplay",
    logo: "nodejs.svg",
    logo2: "react.svg",
    logo3: "firebase.svg",
    linkto: "https://crowdplay-music-sharing.herokuapp.com/",
    image: "image1"
  },
  {
    id: 2,
    title: "WalkStevensFitness",
    logo: "gatsby.svg",
    logo2: "react.svg",
    linkto: "https://friendly-neumann-6c1095.netlify.com/",
    image: "image2"
  },
  {
    id: 3,
    title: "printworksapparel",
    logo: "react.svg",
    linkto: "",
    image: "3"
  },
  {
    id: 4,
    title: "Basic Weather App",
    logo: "react.svg",
    linkto: "",
    image: "4"
  }
];

const CardComponentContainer = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      paddingTop: "4%"
    }}
  >
    {listofProjects.map(projects => {
      return (
        <div key={projects.id}>
          <CardComponent
            image={projects.image}
            title={projects.title}
            logo={projects.logo}
            logo2={projects.logo2}
            logo3={projects.logo3}
            linkto={projects.linkto}
            picture={projects.picture}
          />
        </div>
      );
    })}
  </div>
);

export default CardComponentContainer;
