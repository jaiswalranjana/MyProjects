
import TransactionCard from "./TransactionCard";
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
    <h2 className="text-2xl font-bold mt-12 mb-6"
    >Monthly Transations</h2>
    {
         expenses.length === 0 ? (

    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">

      <div className="text-5xl mb-3">📂</div>

      <h3 className="text-xl font-semibold text-gray-700">
        No expenses added yet
      </h3>

      <p className="text-gray-500 mt-2">
        Add your first expense above to start tracking.
      </p>

    </div>

  ) : 
      [...expenses]
  .reverse()
  .map((expense) => (
    <TransactionCard
        key={expense.id}
        expense={{
            ...expense,
            date: new Date(expense.date),
        }}
        onDelete={handleDelete}
    />
))
    }
        </>
    );
}

export default MonthlyTransactions;