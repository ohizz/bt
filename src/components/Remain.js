import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
 const {budget, expenses} = useContext(AppContext);

 const remain = expenses.reduce((total, exp) => {
  return total+=exp.cost;
 },0)

 const remains = budget - remain;
 return(
  <div className={`acct remain`} style={
   budget < remain ? {backgroundColor: 'tomato'} : {backgroundColor: 'white'}}> 
  <p>
  Remaining:<span>${remains}</span> <small className='small'>{remain > budget ? 'sapa choke you' : ''}</small></p>
  </div>
 )
}

export default Remaining;