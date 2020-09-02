import React, { Component } from "react";
import Input from "./Input";

export default class Form extends Component {
  constructor(props) {
    super(props);

    let values = props.fields.map((field) => {
      return {
        field: field.name,
        value: "",
      };
    });

    this.state = {
      fields: [...values],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input, id) {
    const newFields = [...this.state.fields];
    newFields[id].value = input;

    this.setState({
      fields: [...newFields],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleSubmit } = this.props;
    //reduce to single object here
    handleSubmit({ ...this.state.fields });
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
            <Input
              label={label}
              name={name}
              type={type}
              id={i}
              key={i}
              handleChange={(input, id) => this.handleChange(input, id)}
            />
          );
        })}
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
