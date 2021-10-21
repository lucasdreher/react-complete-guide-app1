import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
	const expenses = props.data;
	const expensesList = expenses.map((expense) => (
		<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
	));

	return <Card className="expenses">{expensesList}</Card>;
}

export default Expenses;
