import './styles.css'
import React from 'react';



export const Calculator = () => {
  return (
    <div className='calc-body'>
      <div className='header'>Sommeroppgave kalkulator</div>
      {/* <input className='skjerm' placeholder='0'/> */}
      <div className='screen'>
        <div className='prev-op'>1234</div>
        <div className='current-op'>1234</div>
      </div>

      <div className='keypad'>
        <button className='buttons'>7</button>
        <button className='buttons'>8</button>
        <button className='buttons'>9</button>
        <button className='del'>DEL</button>
        <button className='buttons'>4</button>
        <button className='buttons'>5</button>
        <button className='buttons'>6</button>
        <button className='buttons'>+</button>
        <button className='buttons'>1</button>
        <button className='buttons'>2</button>
        <button className='buttons'>3</button>
        <button className='buttons'>-</button>
        <button className='buttons'>.</button>
        <button className='buttons'>0</button>
        <button className='buttons'>/</button>
        <button className='buttons'>x</button>
        <button className='reset'>RESET</button>
        <button className='equal'>=</button>
      </div>

    </div>
  )
}
