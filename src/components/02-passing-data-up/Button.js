import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleUpdate } = this.props;
    const { count } = this.state;
    const updatedCount = count + 1;
    this.setState({
      count: updatedCount,
    });
    handleUpdate(updatedCount);
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Press me!
        </button>
      </div>
    );
  }
}
