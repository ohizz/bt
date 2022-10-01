import React, {useContext, useState, useRef} from 'react';
import { AppContext } from '../context/AppContext';

const uuid = require('uuid');
const AddExpense = () => {
 const {dispatch} = useContext(AppContext);

 const [name, setName] = useState('');
 const [cost, setCost] = useState(0);
 const inputRef = useRef(null);

 const handlerSubmit = (e) => {
  e.preventDefault();
  const expense = {
    name:name,
    cost:parseInt(cost),
    id: uuid.v4()
  }

  inputRef.current.focus()


  dispatch({
    type: "ADD_EXPENSE",
    payload: expense,
  })
  setName('')
  setCost('')
 
 }
 let regex2 = /^[0-9\b]+$/

 const changeSet = (e) => {
  if(e.target.value === "" || regex2.test(e.target.value)){
    setCost(e.target.value);
  } else {
    console.log(e)
  }
 }

 return(
  
  <form onSubmit={handlerSubmit}> 
   <input type='text'ref={inputRef}  placeholder='enter expense name' required value={name} onChange={(e) => setName(e.target.value)}/>
   <input type='text' placeholder='enter cost' required value={cost}  onChange={changeSet}/>
    <button type='submit'>submit</button>
  </form>
  
 )
}

export default AddExpense;