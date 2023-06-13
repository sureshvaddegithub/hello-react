
import React ,{useState} from "react";

const Form2 = ()=>{
//   let [name ,setName] = useState("");
//   let [email, setEmail] = useState("");
 let [error,setError] = useState("");

let[formvalues,setFormvalues] = useState({name:"",email : ""});


  function handleChange(event){
    setFormvalues({...formvalues,name:event.target.value});
  }

  function submit(e){
   e.preventDefault();

   if(formvalues.name.trim() == ""){
    setError("Enter the full name");
    return;
   
  }

  if(!formvalues.name.includes(" ")){
    setError("full name required")
    return;
  }
}

return (
    <div>
        <form>
            <input type="text" placeholder="Enter your full name" 
            onChange={handleChange}/>
            <input type="email" placeholder="Enter your full name" />
            <button type="submit" onClick={submit}>submit</button>
            
            
        </form>
        {
             formvalues.name && <p>{formvalues.name}</p>
        }
    </div>
)


}


export default Form2;