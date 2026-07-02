

import { useState } from "react";
function SetBudget({setBudget}){

    const [inputBudget,setInputBudget]=useState("");


    function handleSubmit(e){
        e.preventDefault(); 
        setBudget(Number(inputBudget));
        setInputBudget("");
    }
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">
           Monthly Budget
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-8">
            <input
            className="border rounded-lg px-4 py-2"
             type="number"
             placeholder="enter amount"
              required
              value={inputBudget}
              onChange={(e)=>setInputBudget(e.target.value)}
              
              />
          <button
          className=" bg-indigo-600 text-white px-5 py-2 
          rounded-lg font-semibold hover:bg-indigo-700 transition"
          >Set Budget</button>
        </form>
        </div>
    );
}

export default SetBudget;