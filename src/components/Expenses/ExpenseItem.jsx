
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";
import { useState } from "react";
function ExpenseItem(props) {
const[title,setTitle]=useState(props.title);
 function  buttonClickHandler() {
  setTitle("New Title");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__descriptio">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </div>
    </Card>
  )
}
export default ExpenseItem;


