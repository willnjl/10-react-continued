import React, { Component } from "react";
import axios from "./axios";

export default class Comments extends Component {
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
            {comments.length === 0 ? (
              <p>...no comments yet</p>
            ) : (
              comments.map(({ id, comment, email }) => (
                <li key={id} class="list-group-item">
                  <h5>"{comment}"</h5>
                  <p>{email}</p>
                </li>
              ))
            )}
          </ul>
        )}
      </>
    );
  }
}
