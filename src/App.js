import React from "react";
import CardComponentContainer from "./Components/Containers/CardComponentContainer";
import HeaderContainer from "./Components/Containers/HeaderContainer";
import { config, Spring } from "react-spring/renderprops";
import Contact from "./Components/Contact";

const backGroundStyles = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#2f3138",
  backgroundsize: "cover"
};

const App = () => {
  return (
    <div style={backGroundStyles}>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.slow}>
        {props => (
          <div style={props}>
            <HeaderContainer />
            <section>
              <CardComponentContainer />
            </section>
          </div>
        )}
      </Spring>
      <Contact />
    </div>
  );
};

export default App;
