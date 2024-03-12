/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *          <h1>I am H2 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am H1 tag</h1>
 *          <h1>I am H2 tag</h1>
 *      </div>
 *  </div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hello from bavya"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
// ]);
// const rootOfParent = ReactDOM.createRoot(document.getElementById("root"));
// rootOfParent.render(parent);

// console.log("parent", parent); //object

// const heading = React.createElement('h1',{id: "Heading"},'Hello World from react!');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log("heading",heading);

//JSX (transpiled before it reaches the JS) - PARCEL - Babel
//JSX => Babel transpiled in to React.createElement => ReactElement-JS Object => HTMLElement(render);

//JSX - is not HTML in JS
//JSX - is look like HTML or XML syntax

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

//React Functional Components or components Compositions 
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1>Namaste React Functional Components</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


