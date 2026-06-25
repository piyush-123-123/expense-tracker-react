import "./Expenses.css";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter";
import { use, useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState("2023");
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
   // console.log(selectedYear);
  }
  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;

  })
   console.log("filteredExpenses",filteredExpenses);
  

  return (
    <Card className="expenses">
      
      <ExpenseFilter selected={filteredYear} onChangeHandler={filterChangeHandler}/>
      <ExpenseChart  chartExpenses={filteredExpenses}/>
     <ExpenseList items={filteredExpenses} />
       
    </Card>
  );
}
export default Expenses;
