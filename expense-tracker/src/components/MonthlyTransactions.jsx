function MonthlyTransactions({expenses}){

    // console.log(expenses);
    return (
        <>
    <h2>Monthly Transations</h2>
    {
        expenses.map((expense)=>(
            <p>
                {expense.category} -
                &#8377;{expense.amount}

            </p>
        ))
    }
        </>
    );
}

export default MonthlyTransactions;