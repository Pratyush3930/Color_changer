import React from 'react'
import './Square.css'


const Square = ({newColor}) => {


  return (
    <div className='ColorDisplayer'
    style={newColor}>
    </div>
  )
}

export default Square