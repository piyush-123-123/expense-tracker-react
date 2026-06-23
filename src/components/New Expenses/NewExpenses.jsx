import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(){
    const saveExpesenseDataHandler=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,id: Math.random().toString()};
        console.log(expenseData);
    }

    return (
       <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpesenseDataHandler}/>
       </div>
    )

}
export default NewExpenses;