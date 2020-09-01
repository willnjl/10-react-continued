import React, { Component } from "react";
import Counter from "./Counter";

export default class Max extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.numbers.slice(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(i, amount) {
    const values = this.state.values.slice();
    let newVal = values[i] + amount;
    if (newVal >= 0 && newVal <= this.props.max) {
      values[i] += amount;
      this.setState({ values });
    }
  }

  render() {
    const { values } = this.state;
    const max = values.reduce((max, value) => (value > max ? value : max));

    return (
      <>
        {values.map((val, i) => {
          return (
            <Counter
              value={values[i]}
              key={i}
              selected={val === max}
              handlePlus={() => this.handleChange(i, 1)}
              handleSubtract={() => this.handleChange(i, -1)}
            />
          );
        })}
      </>
    );
  }
}
