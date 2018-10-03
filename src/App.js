import React, { Component } from 'react'
import './App.css'
import Json from './Json.json'
import Category from './Category'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = Json
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Things I Like</h1>
          <h2>A Photo Gallery by Benjamin Kent Jehl</h2>
        </header>
        <main>
          <Category category={this.state.pandas} />
          <Category category={this.state.miniatures} />
        </main>
      </div>
    )
  }
}

export default App
