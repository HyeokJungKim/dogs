import React, { Component } from 'react';
import DogContainer from './containers/DogContainer'
import ImageContainer from './containers/ImageContainer'
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Get Doggo</h1>
        <DogContainer></DogContainer>
        <h1>Find Image</h1>
        <ImageContainer></ImageContainer>
      </div>
    );
  }
}

export default App;
