import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props){
    if(props.items.length===0){
        return <h2 className="expense-list__fallback">No Expense Found !!</h2>
    }
    return (
        <ul className="expense-list">
        {
            props.items.map((item)=>{
              return (
                <ExpenseItem 
                key={item.id}
                title={item.title}
                price={item.price}
                date={item.date}
               
              />
            )
            })
        }

        </ul>
    )

}
export default ExpenseList;