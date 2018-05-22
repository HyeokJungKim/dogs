import React,{Component} from 'react'

const Image = (props) => {
  return(
    <div>
      <img src={props.url}></img>
    </div>
  )
}

export default Image;
