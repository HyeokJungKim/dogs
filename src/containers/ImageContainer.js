import React, { Component } from 'react'
import ImageForm from '../components/ImageForm'
import Image from '../components/Image'


class ImageContainer extends Component{
  state = {images:[]}

  searchTerm = (searchTerm)=>{
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({images: json.data})
      })

  }

  reset = () => {
    this.setState({images:[]})
  }

  render(){
    let images = this.state.images.slice(0,5).map((image)=>{
      return <Image url={image.images["fixed_height_still"]["url"]} key={image.id}></Image>
    })
    return(
      <div>
        <button onClick={this.reset}>Reset Images</button>
        <ImageForm searchTerm={this.searchTerm}></ImageForm>
        {images}
      </div>
    )
  }
}

export default ImageContainer
