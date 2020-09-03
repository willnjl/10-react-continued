import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "./axios";

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      tags: [],
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }
  handleContent(e) {
    this.setState({
      content: e.currentTarget.value,
    });
  }
  handleTags(e) {
    const array = e.currentTarget.value.split(", ");
    this.setState({
      tags: array,
    });
    console.log(array);
  }

  handleSubmit() {
    const { title, content, tags } = this.state;
    axios
      .post("/blog/articles", {
        title: title,
        content: content,
        tags: tags,
      })
      .then((response) => {
        // REDIRECT SOMEHOW HERE
      });
  }

  render() {
    const style = { padding: "2rem", margin: "auto" };
    return (
      <form style={style}>
        <div className="form-group" style={style}>
          <h2 className="display-2 text-primary">Create Article</h2>
          <label className="lead" htmlFor="title">
            {"Title"}
          </label>
          <input
            onChange={(e) => this.handleTitle(e)}
            className="form-control"
            type="text"
            name="title"
          />
          <label className="lead" htmlFor="content">
            {"Content"}
          </label>
          <textarea
            onChange={(e) => this.handleContent(e)}
            name="content"
            className="form-control"
          />
          <label className="lead" htmlFor="tags">
            {"Tags "}
          </label>
          <input
            onChange={(e) => this.handleTags(e)}
            type="text"
            name="tags"
            className="form-control"
          />
          <div
            onClick={this.handleSubmit}
            className="btn btn-dark"
            style={{ marginTop: "1.5rem" }}
          >
            {"Submit"}
          </div>
        </div>
      </form>
    );
  }
}
