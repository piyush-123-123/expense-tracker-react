import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props){
    const saveExpesenseDataHandler=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,id: Math.random().toString()};
        props.onAddExpense(expenseData);
    }

    return (
       <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpesenseDataHandler}/>
       </div>
    )

}
export default NewExpenses;