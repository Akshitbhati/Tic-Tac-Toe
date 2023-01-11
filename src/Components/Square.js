import React from 'react'
import '../App.css'
const Square = (props) => {
  return (
    <div className='square' onClick={props.onClick}>
            <p className='text'>{props.value}</p>
    </div>
  )
}

export default Square