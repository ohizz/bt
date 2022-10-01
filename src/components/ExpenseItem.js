import React, {useContext, useState} from 'react';
import ExpenseList from './ExpenseList';
import { AppContext } from '../context/AppContext';


const ExpenseItem = ({comp,setComp,id}) => {
const uuid = require('uuid');
const {dispatch} = useContext(AppContext);

const handleDel = () => {
dispatch({
 type: "DEL_BUDGET",
 payload: id,
 })
}

const {expenses} = useContext(AppContext);
const [suggestions , setSuggestions] = useState([]);
const [suggestionIndex, setSuggestionIndex] = useState(0);
const [suggestionsActive, setSuggestionsActive] = useState(false);
const [value, setValue] = useState("");

const handleChange = (e) => {
const query = e.target.value;
const regex = new RegExp(query, 'gi');
setValue(query);
if (query.length > 1) {
 setComp(false)
 const filterSuggestions = expenses.filter((el) =>
 el.name.match(regex)
 );

 setSuggestions(filterSuggestions);
 setSuggestionsActive(true);
 setComp(false)
}else {
 setSuggestionsActive(false);
 setComp(true)
 }
};

const handleClick = (e) => {
 setSuggestions([]);
 setValue(e.target.innerText);
 setSuggestionsActive(false);
 setComp(true)
};

const handleKeyDown = (e) => {
// UP ARROW
if (e.keyCode === 38) {
 if (suggestionIndex === 0) {
  return;
 }
 setSuggestionIndex(suggestionIndex - 1);
 setComp(false);
}
// DOWN ARROW
else if (e.keyCode === 40) {
 if (suggestionIndex - 1 === suggestions.length) {
 return;
 }
 setSuggestionIndex(suggestionIndex + 1);
 }
// ENTER
else if (e.keyCode === 13) {
 setValue(suggestions[suggestionIndex]);
 setSuggestionIndex(0);
 setSuggestionsActive(false);
 }
};

const Suggestions = () => {
return (
 <ul className="expenseslist"> {suggestions.map((suggestion, index) => {
  return (
  <li key={uuid.v4()} onClick={handleClick}>
   <small>{suggestion.name}</small> <span>${suggestion.cost}</span> <button onClick={handleDel}><i className="fa fa-trash-o"></i></button>
  </li>
  );
 })} 
 </ul>
 );
};
return (
 <div className="autocomplete">
  <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='search for your expense'/>
   {suggestionsActive && <Suggestions />}
  <ul className='expenseslist'>
   {expenses.map((exp) => (
   <ExpenseList id={exp.id}
   name={exp.name}
   cost={exp.cost}
   comp={comp}
   setComp={setComp}/>
   ))}
  </ul>
 </div>
);

}
export default ExpenseItem;