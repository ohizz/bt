import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const uuid = require('uuid');
const ExpenseList = ({name, cost, comp, setComp, id}) => {
const {expenses, dispatch} = useContext(AppContext);

const handleDel = () => {
dispatch({
 type: "DEL_BUDGET",
 payload: id,
 })
}

return(
 <>
  {comp &&  <li key={uuid.v4()}>
   <small>{name}</small> <span>${cost}</span>
   <button onClick={handleDel}><i className="fas fa-trash"></i></button>
  </li>}
 </>  
)
}

export default ExpenseList;