import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";



const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle]=useState("");
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");
    
    const titleChangeHandle=(event)=>{
     setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
     setEnteredAmount(event.target.value);
    }
    const dateChangeHandle=(event)=>{
       setEnteredDate(event.target.value);
       
    }    
    const formSubmitHandler=(event)=>{
    event.preventDefault();

  console.log("Title:", enteredTitle);
  console.log("Amount:", enteredAmount);
  console.log("Date:", enteredDate);
    const ExpenseData={
        title:enteredTitle,
        price:enteredAmount,
        date:new Date(enteredDate)
    }
    props.onSaveExpenseData(ExpenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    }
 return (
    <form onSubmit={formSubmitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" value={enteredTitle} id="title" onChange={titleChangeHandle}/>
        </div>
         <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" value={enteredDate} min="2023-01-01" max="2024-12-31" id="date" onChange={dateChangeHandle}/>
        </div>
         <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" value={enteredAmount} id="amount" onChange={amountChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
    </form>
 )

}
export default ExpenseForm;