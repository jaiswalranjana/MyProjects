function MonthlyTransactions({expenses,setExpenses}){

    // console.log(expenses);
  

    //filter()
// Keep only the items that satisfy a condition.
    function handleDelete(id){
            const updatedExpenses=expenses.filter((expense)=>{
                return expense.id!==id;
            });
            setExpenses(updatedExpenses);
    }
    return (
        <>
    <h2>Monthly Transations</h2>
    {
        expenses.map((expense)=>(
            <div key={expense.id}>
               <p> {expense.category} -
                &#8377;{expense.amount} 
            </p>
            <p>{expense.description}</p>
            <p>{new Date(expense.date).toLocaleDateString()}</p>

            <button onClick={()=>handleDelete(expense.id)}>
                Delete</button>
            </div>
        ))
    }
        </>
    );
}

export default MonthlyTransactions;