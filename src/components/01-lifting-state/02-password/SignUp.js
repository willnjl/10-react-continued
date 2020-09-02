import React, { Component } from "react";
import Password from "./Password";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field01: "",
      field02: "",
    };
  }

  render() {
    const { field01, field02 } = this.state;
    const { minimumLength } = this.props;
    const valid =
      field01.length === 0 ||
      (field01 === field02 &&
        field01.length + field02.length >= minimumLength * 2);

    return (
      <div>
        <Password
          label="Password"
          handleChange={(e) => {
            this.setState({ field01: e.currentTarget.value });
          }}
          valid={valid}
          input={field01}
        />
        <Password
          label="Confirm Password"
          handleChange={(e) => {
            this.setState({ field02: e.currentTarget.value });
          }}
          valid={valid}
          input={field02}
        />
        <p className="small">minimum length {this.props.minimumLength}</p>
      </div>
    );
  }
}
