import "./Expenses.css";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem"
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
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
