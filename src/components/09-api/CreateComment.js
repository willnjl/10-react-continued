import React, { Component } from "react";
import axios from "./axios";

export default class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      comment: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleComment(e) {
    this.setState({
      comment: e.currentTarget.value,
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, comment } = this.state;
    axios
      .post(`/blog/articles/${this.props.articleID}/comments`, {
        email: email,
        comment: comment,
      })
      .then(() => console.log("comment made"));
  }

  render() {
    return (
      <form
        className="form-group"
        style={{ padding: "2rem", margin: "auto" }}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <label className="lead" htmlFor="email">
          email
        </label>
        <input
          className="form-control"
          name="email"
          type="email"
          onChange={(e) => this.handleEmail(e)}
        />
        <label className="lead" htmlFor="comment">
          {" "}
          leave a comment
        </label>
        <input
          className="form-control"
          name="comment"
          type="text"
          onChange={(e) => this.handleComment(e)}
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    );
  }
}
