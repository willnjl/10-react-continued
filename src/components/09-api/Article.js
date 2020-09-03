import React, { Component } from "react";
import axios from "./axios";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
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
    const { title, content, tags } = article;
    const { articleID } = this.props;

    return !loaded ? (
      <p>...loading </p>
    ) : (
      <>
        <article>
          <h1 className="display-3 text-primary">{title}</h1>
          <p>{content}</p>

          <Tags tags={tags} />
        </article>
        <Comments articleID={articleID} />
        <CreateComment articleID={articleID} />
      </>
    );
  }
}
