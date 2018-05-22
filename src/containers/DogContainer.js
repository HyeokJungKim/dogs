import React, { Component } from 'react';
import Dog from '../components/Dog'
import DogForm from '../components/DogForm'
import uuid from 'uuid'

class DogContainer extends Component{
  state = {dogs:[]}

  howManyDogs = (num) => {
    let arr = []
    for (var i = 0; i < parseInt(num); i++) {
      arr.push(<Dog key={uuid()}></Dog>)
    }
    this.setState({dogs: arr})
  }

  reset = () => {
    this.setState({dogs: []})
  }

  render(){
    return(
      <div>
        <button onClick={this.reset}>Reset Dogs</button>
        <DogForm howManyDogs={this.howManyDogs}></DogForm>
        <br/>
        {this.state.dogs}
      </div>
    )
  }
}

export default DogContainer
