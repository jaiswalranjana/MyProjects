
import { useState } from 'react'
import Navbar from './components/Navbar'
import BudgetSummary from './components/BudgetSummary'
import SetBudget from './components/SetBudget'
import AddExpenseForm from './components/AddExpenseForm'
import MonthlyTransactions from './components/MonthlyTransactions'
import { useEffect } from 'react'

function App() {
  const [budget,setBudget]=useState(
    () => {
    const savedBudget = localStorage.getItem("budget");

    if (savedBudget) {
        return Number(savedBudget);
    }

    return 0;
}
  );

  const[expenses,setExpenses]=useState(()=>{
    const savedExpenses=localStorage.getItem("expenses");

    if(savedExpenses){
       return JSON.parse(savedExpenses);
    }
   return []
  }
  );


  useEffect(() => {
    localStorage.setItem("budget", budget);
}, [budget]);

  useEffect(()=>{
    // console.log("useeffect ran ");

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)

    );
  },[expenses]);



  
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
