import React from "react";

const Image = (...props) => {
  return (
    <div>
      <img
        alt={props.image}
        // src={require(`../../public/Image/${props.image.toLowerCase()}.jpeg`)}
      />
    </div>
  );
};

export default Image;
