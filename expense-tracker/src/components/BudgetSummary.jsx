function BudgetSummary({budget,expenses}){

    const spent =expenses.reduce((total,expense)=>{
        return total+Number(expense.amount);
    },0);

    const remain=budget-spent;
    return (
        <>
        <h3>Budget : &#8377; {budget}</h3>
        <h3>Spent :&#8377;{spent} </h3>
        <h3>Remaining : &#8377;{remain} </h3>
        </>
    );
}

export default BudgetSummary;