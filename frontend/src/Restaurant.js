import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  constructor(id, name, rating) {
    super()
    this.state = {
      id: id,
      name: name,
      rating: rating
    }
  }
  
  render() {
    return (
      <div> 
        {this.props.id}
        {this.props.name}
        <Counter count={this.props.rating}/>
        <br/>
      </div>
    )
  }
}

export default App
