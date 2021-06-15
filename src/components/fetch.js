import React, { Component } from "react";

class fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://localhost:61691")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          data: data.url,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to React App that is getting data from localhost:61691`</h1>
      </div>
    );
  }
}

export default fetch;
