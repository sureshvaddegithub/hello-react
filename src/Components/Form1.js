import React,{useState} from "react";

const Form1 = ()=>{
   let [count,setCount] =useState("");

   function handelChange(event){
    setCount(event.target.value);
   }

    return (<div>
    <input type="text"  placeholder="Enter your name"
    onChange={handelChange} />
    <p>{count}</p>
    </div>)
}


export default Form1