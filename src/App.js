import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizza"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Classic pepperoni pizza",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Simple and delicious",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
