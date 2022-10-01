import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Spent = () => {
 const{budget, expenses} = useContext(AppContext);
 const spend = expenses.reduce((total, exp) => {
 return total += (exp.cost);
 },0)

 return(
  <div className='acct spent'>
  <p>Spent:<span>${spend}</span></p>
  </div>
 )
}

export default Spent;