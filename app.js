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

const nested = React.createElement(
  "div",
  { id: "xyz1" },
  React.createElement("div", { id: "xyz2" }, [
    React.createElement("div", { id: "xyz3" }, "Hello 1"),
    React.createElement("h1", {}, "hellow"),
  ])
);
// debugger;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);
