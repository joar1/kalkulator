import { LOAD_ANS, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE } from "./kalkulator.actionTypes";

export const CALCULATOR_KEY = "calculatorStore"

let initialState = {
   number:"",
   answer:"",
}

export const calculatorReducer = (state = initialState, action) => {
   let {type, payload} = action

   switch(type){
      case LOAD_BUTTONS:
         return{
            ...state,
            ...payload,
            number:state.state.concat(action.payload) 
         }
      case LOAD_ANS:
         try{
            return{
               ...state,
               ...payload,
               ans:eval(state.number).toString()
            }
         }catch(error){
            return{
               ...state,
               ...payload,
               ans:'Feil'
            }
         }
      case LOAD_CLEAR:
         return{
            ...state,
            ...payload,
            number:''
         }
   }
}