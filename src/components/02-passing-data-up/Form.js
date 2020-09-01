import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    let values = props.fields.map((field) => {
      return {
        name: field.name,
        value: "",
      };
    });

    super(props);
    this.state = {
      values: { ...values },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, i) {
    let target = e.currentTarget;
    const values = this.state.values;
    values[i].value = target.value;

    this.setState({
      values: values,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit({ ...this.state.values });
  }
  render() {
    const { fields } = this.props;
    return (
      <form
        className="form-group"
        onSubmit={(e) => this.handleSubmit(e)}
        style={{ maxWidth: "24rem", margin: " auto" }}
      >
        {fields.map((field, i) => {
          const { label, name, type } = field;
          return (
            <div key={i}>
              <label htmlFor={name}>{label}</label>
              <input
                name={name}
                type={type}
                className="form-control"
                onChange={(e) => this.handleChange(e, i)}
              />
            </div>
          );
        })}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
