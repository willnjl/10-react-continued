import React, { Component } from "react";

import Square from "./Square";

export default class Squares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }
  render() {
    const { selected } = this.state;
    return (
      <div>
        <Square
          name="Square 1"
          selected={selected === 1}
          color="hotpink"
          handleClick={() => this.setState({ selected: 1 })}
        />
        <Square
          name="Square 2"
          selected={selected === 2}
          color="hotpink"
          handleClick={() => this.setState({ selected: 2 })}
        />
      </div>
    );
  }
}
