import React, { Component } from "react";
import axios from "./axios";
import Commments from "./Comments";
import Tags from "./Tags";

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      article: {},
    };
  }

  componentDidMount() {
    axios.get(`/blog/articles/${this.props.articleID}`).then((response) => {
      this.setState({
        loaded: true,
        article: response.data.data,
      });
    });
  }

  render() {
    const { article, loaded } = this.state;

    return !loaded ? (
      <p>...loading </p>
    ) : (
      <>
        <article>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          {article.tags.map((tag) => (
            <Tags tagName={tag} />
          ))}
        </article>
        <Commments articleID={this.props.articleID} />
      </>
    );
  }
}
