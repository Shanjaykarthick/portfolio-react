import React, { useState } from 'react';

function Header(){
    const [status,setStatus]=useState("offline")
    const Ctime = new Date().toLocaleTimeString();
    console.log(Ctime)
    if(Ctime >= "17:00:00" && status !="gray"){
        console.log("system is offline")
       setStatus("gray")
    }
 
    return(
        <>
     <div style={{width : "100%",height:"100vh",backgroundColor: status}}>
        HEADER REACT
        {status}
        <button disabled={status=="grey" ? true: false}>test </button>
     </div>
        
        </>
    )
}
export default Header;