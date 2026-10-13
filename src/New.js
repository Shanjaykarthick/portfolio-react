import React from 'react'
import { useState } from 'react'
function New() {
    const obj={name:'shanjay',age:19,course:'CSE'}
    const [form,useForm]=useState({name:'shanjay',age:19,couse:'CSE'})

      function submit(event){
         event.preventDefault();

       }
    const[value,setValue]=useState(false);
        
        function theme(){
            
          setValue(!value)
            
        }
    const [Model,setModel] = useState(false);
    function Modelbx(event){
            event.preventDefault();
    }
     const[open,setOpen]=useState(false)
    
        function expand(){
            setOpen(!open)
        }
    
  return (
    <>

    <center>
        <div style={{backgroundColor: value ? "#23272f": "",height:'100vh'}}>
        {value} 
        <span onClick={theme}>{value ? "🌞" : "🌙" }</span>

        <form>
         <label>Name</label> <input  name={"name"}  /><br></br>
         <label>Age</label> <input  name={"age"}/><br></br>
         <label>Course</label> <input name={"course"}/><br></br>
         <button type='submit' onClick={submit}>submit</button><br/>
         
          { Model ? <div className = "model"  >
      <span> "ARE YOUR SURE?"</span>
      <button className = "con" onClick ={ (ModelBx) => setModel(false)}> OK </button>cd
      </div> : ""}

      <button type='submit' className = "con" onClick ={ () => setModel(true)}>delete</button>
      
          </form>
 <p className="head" onClick={expand}>What is react?</p>
        {open ? <p>
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library used for building dynamic, interactive user interfaces (UIs).</p> : ""}


          </div>
           
    </center>
    </>

  )
}

export default New