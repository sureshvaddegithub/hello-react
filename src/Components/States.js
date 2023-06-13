
import React, {useState} from "react"
const States = ()=>{
   let [count,setCount] = useState(0);
    let a = 0;

    function increase1(){
        a = a+1;
        console.log(a);

    }
      
    function increase2(){
       setCount(count+1);
    }


    return (
        <div>
            <h1>{a}</h1>
            <button onClick = {increase1} >click me</button>
            <h1>{count}</h1>
            <button onClick = {increase2} >click me</button>
        </div>
    )
}


export default States