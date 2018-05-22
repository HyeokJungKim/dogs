import React,{Component} from 'react'

class Dog extends Component{
  state = {
    clicked: false
  }

  makeFavorite = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return(
      <div onClick={this.makeFavorite}>
        {this.state.clicked ? <h1>"Saved"</h1> : <img src={this.props.link}></img>}
      </div>
    )
  }
}

export default Dog;
