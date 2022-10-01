import { useReducer, createContext } from "react";

const uuid = require('uuid');
const AppReducer = (state, action) => {
 switch(action.type){
   case 'ADD_EXPENSE':
     return{
       ...state,
       expenses:[...state.expenses, action.payload],
     }
     case 'ADD_BUDGET':
     return{
       ...state,
      budget: action.payload,
     }
     case 'DEL_BUDGET':
     return{
       ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload),
     }
  default:
   return state
 }
}

const initialState = {
 budget:0,
 expenses : [
  // {id: uuid.v4(), name: 'brunch', cost: 600},
  // {id: uuid.v4(), name: 'shopping', cost: 10000},
  // {id: uuid.v4(), name: 'housing', cost: 5000},
  // {id: uuid.v4(), name: 'vacation', cost: 20000},
  // {id: uuid.v4(), name: 'yatching', cost: 30000},
 ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);
 return(
 <AppContext.Provider 
 value={{
  budget:state.budget,
  expenses: state.expenses,
  dispatch,}}>
   {props.children}
 </AppContext.Provider>)
}

