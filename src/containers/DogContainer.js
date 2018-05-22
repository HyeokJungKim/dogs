import React, { Component } from 'react';
import Dog from '../components/Dog'
import DogForm from '../components/DogForm'
import uuid from 'uuid'

class DogContainer extends Component{
  state = {dogs:[]}

  howManyDogs = (num) => {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(res => res.json())
      .then(json => this.setState({dogs:json.message}))
  }

  reset = () => {
    this.setState({dogs: []})
  }

  render(){
    const dogs = this.state.dogs.map((dog) => {
      return <Dog link={dog}></Dog>
    })
    
    return(
      <div>
        <button onClick={this.reset}>Reset Dogs</button>
        <DogForm howManyDogs={this.howManyDogs}></DogForm>
        <br/>
        {dogs}
      </div>
    )
  }
}

export default DogContainer
