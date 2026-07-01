
import { useState } from "react";
function AddExpenseForm({expenses,setExpenses}){



    const [amount,setAmount]=useState("");
    const [category ,setCategory]=useState("");
    const [description,setDescription]=useState("");


    function handleAddExpense(e){
        e.preventDefault();
        const newExpense={
          
            amount,
            category,
            description,
            date:new Date()
    };


    setExpenses([
        ...expenses,
        newExpense
    ]);


    setAmount("");
    setCategory("");
    setDescription("");
    }
    
    return (
    <>
    <form onSubmit={handleAddExpense}>
        <label>
            Amount : 
        </label>
        <input 
        type="number"
         required
         value={amount}
         onChange={(e)=>setAmount(e.target.value)}
         
         />
<label>
    Category :
</label>
        <select
         required
         value={category}
         onChange={(e)=>setCategory(e.target.value)}
         >
            <option value="">Select Category</option>
<option>Food</option>
<option>Travel</option>
<option>Shopping</option>
<option>Bills</option>
<option>Entertainment</option>
<option>Education</option>
<option>Health</option>
<option>Other</option>
        </select>

<label>
    Description :
</label>
<textarea 
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<button type="submit">Add Expense</button>
    </form>
    </>
    );
}












export default AddExpenseForm;