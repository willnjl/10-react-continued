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
    this.setState({
      count: this.state.count + 1,
    });
    handleUpdate(this.state.count);
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
