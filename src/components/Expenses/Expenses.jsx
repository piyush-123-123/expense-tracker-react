import "./Expenses.css";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter";
import { use, useState } from "react";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState("2023");
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
   // console.log(selectedYear);
  }
  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;

  })

  let expenseContent= <p>No Expense Found!!! please Add new one</p>
  if(filteredExpenses.length>0){
    expenseContent=filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
          key={expense.id}
            id={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        )
      });
  }
  if(filteredExpenses.length===1){
    expenseContent=
    <>
    {expenseContent}
    <p>Only one expense found.Please add more</p>
    </>
  }

  return (
    <Card className="expenses">
      
      <ExpenseFilter selected={filteredYear} onChangeHandler={filterChangeHandler}/>
      { filteredExpenses.length===0 &&  <p>No Expense found</p>  }
      {expenseContent}
       
    </Card>
  );
}
export default Expenses;
