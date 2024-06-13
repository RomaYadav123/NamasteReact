import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-avatar-img",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RomaYadav123");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.name} </h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3> Location: {this.state.userInfo.location} </h3>
        <h4> Contact: @github.com </h4>
      </div>
    );
  }
}

export default UserClass;
