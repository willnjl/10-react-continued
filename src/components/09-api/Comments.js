import React, { Component } from "react";
import axios from "./axios";

export default class Commments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      comments: {},
    };
  }

  componentDidMount() {
    const { articleID } = this.props;
    axios.get(`/blog/articles/${articleID}/comments`).then((response) => {
      this.setState({
        loaded: true,
        comments: response.data.data,
      });
    });
  }

  render() {
    const { loaded, comments } = this.state;
    return (
      <>
        <h1>Comment Section</h1>
        {!loaded ? (
          <p>...loading</p>
        ) : (
          <ul className="list-group">
            {comments.map((comment, i) => {
              return (
                <li key={i} class="list-group-item">
                  <h5>"{comment.comment}"</h5>
                  <p>{comment.email}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
