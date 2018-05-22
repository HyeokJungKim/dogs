import React,{Component} from 'react'

class ImageForm extends Component{
  state = {term: ""}

  submit = (event) => {
    event.preventDefault()
    this.props.searchTerm(this.state.term)
  }

  changeState = (event) => {
    this.setState({term: event.target.value})
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <label>What images would you like to see? <br/>
        <input type="text" name="term" onChange={this.changeState}></input></label><br/>
        <input type="submit"></input>
      </form>
    )
  }
}

export default ImageForm;
