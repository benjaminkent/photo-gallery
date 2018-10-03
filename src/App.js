import React, { Component } from 'react'
import './App.css'
import Json from './Json.json'

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
          <article className="category">
            <h3>{this.state.pandas.title}</h3>
            <p>{this.state.pandas.description}</p>
            <img src={this.state.pandas.photos[0].imageURL} />
          </article>
          <article className="category">
            <h3>{this.state.miniatures.title}</h3>
            <p>{this.state.miniatures.description}</p>
            <img src={this.state.miniatures.photos[0].imageURL} />
          </article>
        </main>
      </div>
    )
  }
}

export default App
