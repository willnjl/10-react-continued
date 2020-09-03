import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import Tags from "./Tags";
import DeleteTag from "./DeleteTag";

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
        {!loaded ? (
          <p>loading...</p>
        ) : (
          <ul className="list-group">
            {articles.map(({ id, title, tags }) => (
              <li
                key={id}
                className="list-group-item d-flex justify-content-between"
              >
                <Link key={"link." + id} to={"/news/" + id}>
                  <h1 className="lead">{title}</h1>
                </Link>
                <div key={"tags." + id}>
                  <Tags tags={tags} />
                  <DeleteTag articleId={id} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
