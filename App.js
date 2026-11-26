const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "h1 inside div"),
  ),
);
console.log(parent);

const root = React.createElement("h1", { id: "heading" }, "Hello React!");
const heading = ReactDOM.createRoot(document.getElementById("root"));
heading.render(parent);
