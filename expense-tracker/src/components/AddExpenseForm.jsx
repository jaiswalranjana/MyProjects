
import { useState } from "react";
function AddExpenseForm({expenses,setExpenses}){



    const [amount,setAmount]=useState("");
    const [category ,setCategory]=useState("");
    const [description,setDescription]=useState("");


    function handleAddExpense(e){
        e.preventDefault();
        const newExpense={
            id : Date.now(),
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
    <div className="mt-8">
    <form onSubmit={handleAddExpense}
    className="grid grid-cols-4 gap-8 items-end mt-10 mb-12">
        <div>
        <label className="block mb-2 font-medium" >
            Amount : 
        </label>
        <input 
        type="number"
         required
         value={amount}
         onChange={(e)=>setAmount(e.target.value)}
         className="border rounded-lg px-4 py-3 w-full" 
         focus:outline-none
         focus:ring-2
         focus:ring-indigo-500
         />
         </div>
         <div>
<label className="block mb-2 font-medium">
    Category :
</label>
        <select
         required
         value={category}
         onChange={(e)=>setCategory(e.target.value)}
         className="border rounded-lg px-4 py-3 w-full"
         focus:outline-none
         focus:ring-2
         focus:ring-indigo-500
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
</div>
<div>
<label className="block mb-2 font-medium">
    Description :
</label>
<input
type="text"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
className="w-full border rounded-xl px-4 py-3 h-12 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
focus:outline-none
         focus:ring-2
         focus:ring-indigo-500
/>
</div>
<div>
<button type="submit"
 className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-3 rounded-xl shadow-md font-semibold"
 >Add Expense</button>
 </div>
    </form>
    </div>
    );
}












export default AddExpenseForm;