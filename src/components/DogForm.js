import React,{Component} from 'react'

class DogForm extends Component{
  state = {number: 0}

  submit = (event) => {
    event.preventDefault()
    this.props.howManyDogs(this.state.number)
  }

  changeState = (event) => {
    this.setState({number: event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <label>How many dogs would you like to see? <br/>
        <input type="number" name="number" min="0" max="10" onChange={this.changeState}></input></label><br/>
        <input type="submit"></input>
      </form>
    )
  }
}

export default DogForm;
