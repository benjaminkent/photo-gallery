import React, { Component } from 'react'
import CategoryList from './CategoryList'

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Things I Like</h1>
          <h2>A Photo Gallery by Benjamin Kent Jehl</h2>
        </header>
        <CategoryList />
      </div>
    )
  }
}

export default Home
