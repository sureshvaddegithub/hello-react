import React,{useState} from "react";
import { FaPlus,FaMinus,FaSync } from "react-icons/fa";

const Counter = ()=>{
    let[count, setCount] = useState(0);

    return (
        <div>
            <h1>{ count}</h1>
            <button onClick={()=>setCount(count+1)}>{<FaPlus/>}</button>
            <button onClick={()=>{setCount(count-1)}}>{<FaMinus/>}</button>
            <button onClick={()=> setCount(0)}>{<FaSync/>}</button>
        </div>
    )
}

export default Counter;