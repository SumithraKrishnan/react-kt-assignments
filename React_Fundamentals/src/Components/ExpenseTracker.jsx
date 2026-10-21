import React, { useState } from 'react';
import expstyle from  "./Expense.module.css"

function ExpenseTracker(props) {
    const [expense,setExpense]=useState([])
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState(0)
    const [category,setCategory]=useState("")
    const [selectedCategory,setSelectedCategory]=useState("All")

    const handleAdd=()=>{
        const newexpense={
            name:title,
            amt:amount,
            Ctry: category
        }
        setExpense([...expense,newexpense])
        setTitle("")
        setAmount("")
        setCategory("")
    }

    const totalspend=expense.reduce((sum,exp)=>
        sum+exp.amt,0
    )

    const FilteredExpense=
         selectedCategory === "All" ?
         expense : expense.filter((exp)=> exp.Ctry===selectedCategory)
    
    const handleDelete=(deleteindex)=>{
        const updatedexpense=expense.filter((exp,index)=> index!==deleteindex)
        setExpense(updatedexpense)
    } 

    
    return (
        <div className={expstyle.container}>
            <h2 style={{marginTop:"30px"}}>Expense Tracker</h2> <br />

            <div className={expstyle.input}>
            <label>Enter Title: </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/> <br />
            <label>Enter Amount: </label>
            <input type="text" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/> <br />
            <label>Enter Category: </label>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/> <br />
            <button className={expstyle.button} onClick={handleAdd}>Add Expense</button> <br />
            </div>
           
            <div className={expstyle.headers}>
            {/*displaying the expenses */}
            <span onClick={()=>setSelectedCategory("All")}>All</span> | <span onClick={()=>setSelectedCategory("Grocery")}>Grocery</span> | <span onClick={()=>setSelectedCategory("Home Utensils")}>Home Utensils</span> | <span onClick={()=>setSelectedCategory("Travel")}>Travel</span> | <span onClick={()=>setSelectedCategory("Entertainment")}>Entertainment</span>
            </div>
            
            
            {FilteredExpense.map((exp,index)=>
            <li className={expstyle.list} key={index}>Title: {exp.name} - Expense: {exp.amt} &nbsp; <button onClick={()=>handleDelete(index)}>Delete</button> </li>
            )}
           
            <h4 style={{textAlign:"left",marginLeft:"20px"}}>Total Spent: {totalspend} Rs</h4>
            
        </div>
    );
}

export default ExpenseTracker;