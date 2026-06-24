import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props){

     const [showForm,setShowForm]=useState(false);
     const formOpenHandler=()=>{
     setShowForm(true);
     }
     const closeFormHandler=()=>{
        setShowForm(false);
     }
    const saveExpesenseDataHandler=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,id: Math.random().toString()};
        props.onAddExpense(expenseData);
        setShowForm(false);
    }
   

    return (
       <div className="new-expense">
        
            {!showForm && (
            <button onClick={formOpenHandler}>Add Expense</button>

            )}
            {showForm && (
             <ExpenseForm onSaveExpenseData={saveExpesenseDataHandler}
             onCancel={closeFormHandler}
             />
             
            )
            }
        
       </div>
    )

}
export default NewExpenses;