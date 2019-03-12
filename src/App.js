import React, { Component } from "react";

const Timeline = props => (
  <div className="timeline">
    <h1>Board</h1>
    {props.children}
  </div>
);

class Time extends Component {
  constructor() {
    this.typeList = {
      RANGE: "1",
      POINT: "2"
    };
    this.state = { type: null };
  }

  render() {
    return (
      <div className="time" data-type={this.state.type}>
        {this.props.children}
      </div>
    );
  }
}

class Effect extends Component {
  constructor(params) {
    super();
  }

  render() {
    return <div className="effect">{this.props.children}</div>;
  }
}

const Layer = props => (
  <div className="layer">
    <h1>Layer</h1>
    {props.children}
  </div>
);

class App extends Component {
  render() {
    return <Timeline />;
  }
}

export default App;
