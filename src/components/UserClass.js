import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo:{
        name: "Dummy",
        location: "Default",
        // avatar_url: "http://dummy-photo.com"
      }
    };

    // console.log("props", props);
    console.log("Children constructor");
  }

  async componentDidMount(){
    console.log(this.props.name,"children component did mount");

    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();

    this.setState({
      userInfo: json
    })

    // console.log("jons",json);
  }

  componentDidUpdate(){
    console.log("children componnets updated")
  }

  componentWillUnmount(){
    console.log("componets will  unmounted")
  }

  render() {
    // const { name, location } = this.props
    const {name,location, avatar_url} = this.state.userInfo;
    const { count, count2 } = this.state;

    console.log("children render")
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >Click Me</button>
        <h1>Count2: {count2}</h1>
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h4>Contact: @bhavyachavda55</h4>
      </div>
    );
  }
}

export default UserClass;
