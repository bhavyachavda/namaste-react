/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *      </div>
 *  </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);
const rootOfParent = ReactDOM.createRoot(document.getElementById("root"));
rootOfParent.render(parent);

console.log("parent", parent); //object

// const heading = React.createElement('h1',{id: "Heading"},'Hello World from react!');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
