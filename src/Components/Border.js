import React from "react";

const borderStyle = {
  marginBottom: "20px",
  background: "black",
  borderBottom: "1px solid black"
};

export default function Border() {
  return (
    <div>
      <div style={borderStyle} />
    </div>
  );
}
