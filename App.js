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

import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello from bavya"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);
const rootOfParent = ReactDOM.createRoot(document.getElementById("root"));
rootOfParent.render(parent);

console.log("parent", parent); //object

// const heading = React.createElement('h1',{id: "Heading"},'Hello World from react!');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
