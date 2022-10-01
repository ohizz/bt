import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
 const {budget} = useContext(AppContext);
 const [value, setValue] = useState(false);
 const [values, setValues] = useState(0);
 const {dispatch} = useContext(AppContext);

 const handleKey = (e) => {
  if (e.key === 'Enter') {
    handleClick();
  }
 }
let regex = /^[0-9\b]+$/;
 const numbersOnly = (e) => {
  if(e.target.value === '' ||regex.test(e.target.value)) {
    setValues(e.target.value)
  }
 }

 const handleClick = (e) => {
  setValue(!value);

  if(value === true){
   const budget  = values;
  dispatch({
   type: "ADD_BUDGET",
   payload: budget,
 })
  }
 
 }

 return(
  <div className='acct budget'>
  <p className='budpara'>{value ? <input type='text' value={values}  onChange={numbersOnly}  onKeyPress={handleKey}/> :`Budget:$${budget}`}</p>
  <button className='budEdit' onClick={handleClick} >{value ? 'save' : 'edit'}</button> 
  </div>
 )
}

export default Budget;