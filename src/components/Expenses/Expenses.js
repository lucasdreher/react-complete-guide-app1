import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props) {
	const expenses = props.data;
	const expensesList = expenses.map((expense) => (
		<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
	));

	const [ filteredYear, setFilteredYear ] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{expensesList}
		</Card>
	);
}

export default Expenses;
