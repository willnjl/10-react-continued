import React, { Component } from "react";
import axios from "./axios";
// import history from "../history";
export default class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      comment: "",
      success: false,
      failure: false,
      messeage: "",
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
    const success = this.setState({
      success: true,
      fail: false,
      message: "your comment has been submitted",
    });
    const fail = (error) => {
      console.log(error);
      this.setState({
        fail: true,
        success: false,
        message: "something went wrong",
      });
    };

    axios
      .post(`/blog/articles/${this.props.articleID}/comments`, {
        email: email,
        comment: comment,
      })
      .then(success, fail);
  }

  render() {
    const { success, fail, message } = this.state;
    return (
      <>
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
          {!success ? null : <p className={"alert alert-success"}>{message}</p>}
          {!fail ? null : <p className={"alert alert-danger"}>{message}</p>}
        </form>
      </>
    );
  }
}
