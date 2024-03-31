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

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

// //React Functional Components or components Compositions
// const HeadingComponent = () => (
//   <div id="container">
//     <Title/>
//     <h1>Namaste React Functional Components</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const APPlayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <APPlayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
