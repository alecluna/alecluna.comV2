import React from "react";
import CardComponentContainer from "./Components/Containers/CardComponentContainer";
import HeaderContainer from "./Components/Containers/HeaderContainer";
import { animated, Transition } from "react-spring/renderprops";

const backGroundStyles = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#2f3138",
  overflowY: "hidden"
};

const App = () => {
  return (
    <div style={backGroundStyles}>
      <HeaderContainer />
      <section>
        <CardComponentContainer />
      </section>
    </div>
  );
};

export default App;
