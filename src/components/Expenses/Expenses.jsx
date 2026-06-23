import "./Expenses.css";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter";
import { use, useState } from "react";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState("2023");
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  return (
    <Card className="expenses">
      
      <ExpenseFilter selected={filteredYear} onChangeHandler={filterChangeHandler}/>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
          key={expense.id}
            id={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        )
      })}
    </Card>
  );
}
export default Expenses;
