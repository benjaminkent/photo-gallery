import React, { Component } from 'react'

class PhotoList extends Component {
  render() {
    return (
      <article className="category">
        <h3>{this.props.category.title}</h3>
        <p>{this.props.category.description}</p>
        <img src={this.props.category.photos[0].imageURL} />
      </article>
    )
  }
}

export default PhotoList
