

import React,{useState} from "react";

const Form3 =()=>{

   let [name,setName] = useState("");
   let [finalname,setFinalName] = useState("");

    function handleChange(event){
        setName(event.target.value)
    }
    
    function reset(){
        setFinalName((finalname + " "+name).trim());
        setName("");

    }
    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={handleChange} value={name}/>
            <p>Name = {finalname}</p>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Form3;