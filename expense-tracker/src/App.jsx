
import { useState } from 'react'
import Navbar from './components/Navbar'
import BudgetSummary from './components/BudgetSummary'
import SetBudget from './components/SetBudget'
import AddExpenseForm from './components/AddExpenseForm'
import MonthlyTransactions from './components/MonthlyTransactions'

function App() {
  const [budget,setBudget]=useState(0);
  const[expenses,setExpenses]=useState([]);

  return (
    <>
     <Navbar/> 
      <SetBudget setBudget={setBudget}/>
     <BudgetSummary
      budget={budget}
      expenses={expenses}
      />
     <AddExpenseForm
     expenses={expenses} 
      setExpenses={setExpenses}
      />
    <MonthlyTransactions
     expenses={expenses}
     setExpenses={setExpenses}/>
    </>
  );
}

export default App
