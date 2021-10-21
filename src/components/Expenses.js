import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
	const expenses = props.data;
	const expensesList = expenses.map((expense) => (
		<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
	));

	return <div className="expenses">{expensesList}</div>;
}

export default Expenses;
