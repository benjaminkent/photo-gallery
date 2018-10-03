import React, { Component } from 'react'
import './App.css'
import CategoryList from './CategoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Things I Like</h1>
          <h2>A Photo Gallery by Benjamin Kent Jehl</h2>
        </header>
        <CategoryList />
      </div>
    )
  }
}

export default App
