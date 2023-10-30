// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World by react"
// );

// nested structure
{
  /* <div id="xyz1">
  <div id="xyz2">
    <div id="xyz3">Hello 1</div>
    <h1>hellow</h1>
  </div>
</div>; */
}
// nested structure using react createElement

import React from "react";
import ReactDOM from "react-dom/client";

const nested = React.createElement(
  "div",
  { id: "xyz1" },
  React.createElement("div", { id: "xyz2" }, [
    React.createElement("div", { id: "xyz3" }, "Hello 1"),
    React.createElement("h1", {}, "harsh say hello"),
  ])
);

// React element
const sample = "Harsh";

const heading = <div>React element {sample}</div>;

const Title = () => <h1>it's title</h1>;

// React functional component
const HeadingComponent = () => {
  return (
    <>
      <div className="heading">Functional Component </div>
      <Title />
      {heading}
    </>
  );
};

const Header = function () {
  return (
    <>
      <div className="heading">Functional Component </div>
      <Title />
    </>
  );
};

{
  /* <HeadingComponent></HeadingComponent>; */
}
{
  // HeadingComponent();
}

// debugger;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
