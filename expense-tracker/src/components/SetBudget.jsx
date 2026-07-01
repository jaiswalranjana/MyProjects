

import { useState } from "react";
function SetBudget({setBudget}){

    const [inputBudget,setInputBudget]=useState("");


    function handleSubmit(e){
        e.preventDefault(); 
        setBudget(Number(inputBudget));
        setInputBudget("");
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Monthly Budget : 
            </label>
            <input
             type="number"
             placeholder="enter amount"
              required
              value={inputBudget}
              onChange={(e)=>setInputBudget(e.target.value)}
              
              />
          <button>Set Budget</button>
        </form>
        </>
    );
}

export default SetBudget;