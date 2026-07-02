function BudgetSummary({budget,expenses}){

    const spent =expenses.reduce((total,expense)=>{
        return total+Number(expense.amount);
    },0);

    const remain=budget-spent;
    return (
        <>
        <div className="grid grid-cols-3 gap-4 my-8">
            <div className="bg-blue-100 p-4 rounded-xl shadow">     
        <h3 className="text-lg font-semibold">Budget</h3>
        <p className="text-3xl font-bold text-blue-700"> &#8377; {budget}</p> 
        </div>

        <div className="bg-red-100 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold">Spent</h3>
        <p className="text-3xl font-bold text-red-700">&#8377;{spent}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold">Remaining </h3>
        <p className="text-3xl font-bold text-green-700">
         &#8377;{remain}
         </p>
        </div>
        </div>
        </>
    );
}

export default BudgetSummary;