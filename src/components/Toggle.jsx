import React from 'react'
import "./Toggle.css"
import sun from'/sun.png'
import moon from'/moon.png'

const toggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle-container'>
      <img src={sun} className='sun' alt='sun' />
        <input
          type='checkbox'
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked}
            />
      <label htmlFor="check"></label>
        <img src={moon} className='moon' alt='moon' />
    </div>
  )
}

export default toggle;