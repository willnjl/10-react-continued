import React, { Component } from "react";

export default class input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChange, id } = this.props;
    handleChange(e.currentTarget.value, id);
  }
  render() {
    const { label, name, type } = this.props;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          className="form-control form-control-sm"
          name={name}
          type={type}
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}
