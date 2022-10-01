import React, { useState } from 'react';
import './App.css';
import AddExpense from './components/AddExpense';
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';
import Remaining from './components/Remain';
import Spent from './components/Spent';
import { AppProvider } from './context/AppContext';
import Footer from './components/Footer';


const App = () => {
  const[comp, setComp] = useState(true);
 return (
  <AppProvider>
 <div className='wrapper'>
   <h1>Budget Tracker</h1>
   <div className='account'>
    <Budget/>
    <Remaining/>
    <Spent/>
   </div>
   <div className='search'>
    <h2 className='expensesHeader'>expenses</h2>
    </div>
    <ExpenseItem  comp={comp} setComp={setComp}/>
    <div className="formInput">
   <AddExpense/>
   </div>
   <Footer/>
  </div>
  </AppProvider>
 )
}

export default App;