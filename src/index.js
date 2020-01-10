import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  outlineStyle: "groove",
  outlineColor: "coral",
  outlineWidth: "7px",
  textTransform: "uppercase",
  animation: "mymove 5s infinite"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
