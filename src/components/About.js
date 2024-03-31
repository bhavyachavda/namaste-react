import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React web Series</h2>
        {/* <User name={"Bhavya Chavda (function components)"}/> */}
        <UserClass
          name={"Bhavya Chavda (class components)"}
          location={"Dehradun Class"}
        />
        {/* <UserClass
          name={"Elon Musk (class components)"}
          location={"US Class"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web Series</h2>
//       {/* <User name={"Bhavya Chavda (function components)"}/> */}
//       <UserClass name={"Bhavya Chavda (class components)"} location={"Dehradun Class"}/>
//     </div>
//   )
// }

export default About;
