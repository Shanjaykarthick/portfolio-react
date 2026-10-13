import { React,useState } from "react";

const Dashbd =()=>{
    const[value,setValue]=useState(false);
    
    function theme(){
        
      setValue(!value)
        
    }

   
    return(
        <>
        <center>
        <div style={{backgroundColor: value ? "#23272f": "",height:'100vh'}}>
        {value} 
        <span style={{cursor:'pointer',size:'20px'}}onClick={theme}>{value ? "🌞" : "🌙" }</span>

        </div>

        </center>

        
        </>
    )
}
export default Dashbd