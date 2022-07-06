import './styles.css'
import React from 'react';



export const Calculator = () => {
  return (
    <div className='calc-body'>
      <div className='header'>Sommeroppgave kalkulator</div>
      <input className='skjerm' placeholder='0'/>
        <div className='prev-op'></div>
        <div className='current-op'></div>

      <div className='tastatur'>
        <button className='knapp'>7</button>
        <button className='knapp'>8</button>
        <button className='knapp'>9</button>
        <button className='knapp'>DEL</button>
        <button className='knapp'>4</button>
        <button className='knapp'>5</button>
        <button className='knapp'>6</button>
        <button className='knapp'>+</button>
        <button className='knapp'>1</button>
        <button className='knapp'>2</button>
        <button className='knapp'>3</button>
        <button className='knapp'>-</button>
        <button className='knapp'>.</button>
        <button className='knapp'>0</button>
        <button className='knapp'>/</button>
        <button className='knapp'>x</button>
        <button className='reset'>RESET</button>
        <button className='equal'>=</button>
      </div>

    </div>
  )
}
