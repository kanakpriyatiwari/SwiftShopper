import { useState } from "react";
// usestate hook ... first import it 
let FirstComp=()=>{

    let [num1,setNum1]=useState(0);  //num1 is variable and setNum1 is a function
    let [num2,setNum2]=useState(0);  // same goes here
    let [flag,setFlag]=useState(false);

    let show=()=>{
        if(flag==true)
         setFlag(false)
        else
        setFlag(true)
        
        
    }

    

    return (
    <>
        {flag && <h1>{parseInt(num1)+parseInt(num2)}</h1>}
        <h1>Component one</h1>
        
        <div>
            enter number 1:<input type="text" value={num1} onChange={(e)=> setNum1(e.target.value)} /><br/>
            enter number 2:<input type="text" value={num2} onChange={(e)=> setNum2(e.target.value)} /><br/>
            
            <button onClick={show}>Click </button><br/>
           
        </div>
    </>
    )
} 


export default FirstComp;