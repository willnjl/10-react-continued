import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleEmailChange(e) {
    let target = e.currentTarget;
    this.setState({
      email: target.value,
    });
  }
  handleNameChange(e) {
    let target = e.currentTarget;
    this.setState({
      name: target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit({ ...this.state });
  }
  render() {
    return (
      <form
        className="form-group"
        onSubmit={(e) => this.handleSubmit(e)}
        style={{ maxWidth: "24rem", margin: " auto" }}
      >
        <label htmlFor="name">name</label>
        <input
          className="form-control"
          name="name"
          type="text"
          id="name"
          onChange={(e) => this.handleNameChange(e)}
        />
        <label htmlFor="email">email</label>
        <input
          className="form-control"
          name="email"
          type="text"
          id="email"
          onChange={(e) => this.handleEmailChange(e)}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
