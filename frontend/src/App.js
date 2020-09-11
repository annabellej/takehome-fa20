import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      currentId: 3,
      inputValue: ''
    }
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleRestaurantAdd = () => {
    var newRestaurant = {id: this.state.currentId + 1, name: this.state.inputValue, rating: 0}

    this.setState((prevState) => ({restaurants: [...prevState.restaurants, newRestaurant]}))
  }

  render() {
    return (
      <div className="App">
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/> 
        <button type="button" onClick={this.handleRestaurantAdd}>Add Restaurant</button>
      </div>
    )
  }
}

export default App
