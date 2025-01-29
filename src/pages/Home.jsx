import React, { useState, useEffect } from 'react'
import '../styles/Home.css'


export default function Home() {
    const [expenses, setExpenses] = useState([])
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [filterText, setFilterText] = useState('')
    const [filterDate, setFilterDate] = useState('')

    const handleAddExpense = () => {
        console.log("name", name)
        console.log("amount", amount)
        console.log("date", date)
        if (!name || !amount || !date) {
            alert('Please fill all the fields')
            return

        }
        setExpenses([...expenses, { id: Date.now(), name, amount, date }])
        setName('')
        setAmount('')
        setDate('')
    }


    useEffect(() => {
        console.log("expenses------------------->", expenses)
    }, [expenses])



    // Delete expense function to delete the expense from the list
    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }





    return (
        <div className="expense-container">
            {/* Add expense form */}
            <div className="add-expense-form">
                <input value={name} type="text" placeholder='Expense Name' onChange={(e) => setName(e.target.value)} />
                <input value={amount} type="number" placeholder='Expense Amount' onChange={(e) => setAmount(e.target.value)} />
                <input value={date} type="date" placeholder='Expense Date' onChange={(e) => setDate(e.target.value)} />
                <button onClick={handleAddExpense}>Add Expense</button>
            </div>


            {/* Filter by amount */}
            <div className="filter-section">
                <input type="number" placeholder='Filter by name or amount' onChange={(e) => setFilterText(e.target.value)} />
                <input type="date" placeholder='Filter by date' onChange={(e) => setFilterDate(e.target.value)} />
            </div>


            {/* Expense list */}
            <div className="expense-list">

                {expenses.length > 0 ? (
                    <ul>
                        {expenses.map((expense) => (
                            <li key={expense.id} className="expense-item">
                                <span>{expense.name}</span>
                                <span>{expense.amount}</span>
                                <span>{expense.date}</span>
                                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : <p>No expenses found</p>}
            </div>



        </div>
    )

}

