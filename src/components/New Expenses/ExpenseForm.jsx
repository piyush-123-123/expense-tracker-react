import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const initialVlaues={
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
}

const ExpenseForm = () =>{
   // const [enteredTitle,setEnteredTitle]=useState("");
   // const [enteredAmount,setEnteredAmount]=useState("");
    //const [enteredDate,setEnteredDate]=useState("");
    const [userInput,setUserInput]=useState({initialVlaues});
    const titleChangeHandle=(event)=>{
       setUserInput((prevState)={
        ...prevState,
        enteredTitle:event.target.value
       })
    }
    const amountChangeHandler=(event)=>{
     setUserInput((prevState)={
        ...prevState,
        enteredAmount:event.target.value
     })
    }
    const dateChangeHandle=(event)=>{
       setUserInput((prevState)={
        ...prevState,
        enteredDate:event.target.value
       })
    }      
 return (
    <form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={titleChangeHandle}/>
        </div>
         <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" min="2023-01-01" max="2024-12-31" id="date" onChange={dateChangeHandle}/>
        </div>
         <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
    </form>
 )

}
export default ExpenseForm;