import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pandas: {
        title: 'Panda Bears',
        description: 'Pandas are bears in China and are super cute',
        imageURL:
          'https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg'
      },
      miniatures: {
        title: 'Miniature Painting',
        description: 'I enjoy miniature painting',
        imageURL:
          'https://instagram.ftpf1-1.fna.fbcdn.net/vp/ac13de8676b9e7d7b3a4f1aaf38a9a55/5C3728A2/t51.2885-15/e35/32203464_178578342778306_8009127367152762880_n.jpg'
      }
    }
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
            <img src={this.state.pandas.imageURL} />
          </article>
          <article className="category">
            <h3>{this.state.miniatures.title}</h3>
            <p>{this.state.miniatures.description}</p>
            <img src={this.state.miniatures.imageURL} />
          </article>
        </main>
      </div>
    )
  }
}

export default App
