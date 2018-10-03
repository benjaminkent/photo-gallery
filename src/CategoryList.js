import React, { Component } from 'react'
import Category from './Category'
import Json from './Json.json'

class CategoryList extends Component {
  render() {
    console.log(Object.keys(Json))
    console.log(Json['pandas'])
    return (
      <main>
        <Category category={Json.pandas} />
        <Category category={Json.miniatures} />
      </main>
    )
  }
}

export default CategoryList
