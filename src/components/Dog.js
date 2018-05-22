import React,{Component} from 'react'

class Dog extends Component{
  state={image: ""}

  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(dog => this.setState({image:dog.message}))
    }

  render(){
    return(
      <div>
        <img src={this.state.image}></img>
      </div>
    )
  }
}

export default Dog;
