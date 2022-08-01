import { useReducer } from 'react'
import './styles.css'
import DigitButton from './components/DigitButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOp: `${state.currentOp || ""}${payload.digit}`,
      }
  }
}

export const Calculator = () => {
  const [{currentOp, previousOp, operation}, dispatch] = useReducer(reducer,{})

  return (
    <div className='calc-body'>
      <div className='header'>Sommeroppgave kalkulator</div>
      <div className='screen'>
        <div className='prev-op'>{previousOp}{operation}TEST</div>
        <div className='current-op'>{currentOp}</div>
      </div>

      <div className='keypad'>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button className='del'>DEL</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button className='button'>+</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button className='button'>-</button>
        <button className='button'>.</button>
        <DigitButton digit="0" dispatch={dispatch} />
        <button className='button'>/</button>
        <button className='button'>x</button>
        <button className='reset'>RESET</button>
        <button className='equal'>=</button>
      </div>
    </div>
  )
}
