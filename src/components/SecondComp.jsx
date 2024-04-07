import { useState } from "react";

let SecondComp=({attr1})=>{

    let [num1,setNum1]=useState(0);
    let [num2,setNum2]=useState(0);
    let [flag,setFlag]=useState(false);
    let show=()=>{
        
        if(flag==true)
         setFlag(false)
        else
        setFlag(true)
        
        
    }

    function one(e)
    {
        if(e.target.name=="one")
            setNum1(e.target.value)
        else
            setNum2(e.target.value)
    }


    return (
    <>
        {flag? <h1>{parseInt(num1)+parseInt(num2)}</h1>:""}
        <h1>Component two{attr1}</h1>
        
        <div>
            enter number 1:<input type="text" name="one" value={num1} onChange={one} /><br/>
            enter number 2:<input type="text" name="two" value={num2} onChange={one} /><br/>
            
            <button onClick={show}>Click </button><br/>
           
        </div>
    </>
    )
} 


export default SecondComp;