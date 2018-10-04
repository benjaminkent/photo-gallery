import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Category extends Component {
  render() {
    return (
      <article className="category">
        <h3>
          <Link to={this.props.category.title}>
            {this.props.category.title}
          </Link>
        </h3>
        <p>{this.props.category.description}</p>
        <img src={this.props.category.photos[0].imageURL} />
      </article>
    )
  }
}

export default Category
