import React, { Component } from "react";
import axios from "./axios";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    axios.get("/blog/articles").then((response) => {
      this.setState({
        loaded: true,
        articles: response.data.data,
      });
    });
  }

  render() {
    const { loaded, articles } = this.state;
    return (
      <>
        <h1> look at my blogs</h1>
        {!loaded ? (
          <p>loading...</p>
        ) : (
          <ul className="list-group">
            {articles.map((article) => {
              return (
                <>
                  <li key={article.id} className="list-group-item">
                    <h1 className="lead">{article.title}</h1>
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
