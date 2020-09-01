import React, { Component } from "react";
import Input from "./Input";

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
        style={{
          maxWidth: "24rem",
          margin: " auto",
          border: "1px grey solid",
          padding: "1rem",
        }}
      >
        {fields.map((field, i) => {
          const { label, name, type } = field;
          return (
            <div key={i} className="form-group">
              <Input label={label} name={name} type={type} />
            </div>
          );
        })}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
