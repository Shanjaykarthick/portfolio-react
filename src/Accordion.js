import React from "react";
import { useState } from "react";
import './Accordion.css';
const Accordion =()=>{
    const[open,setOpen]=useState(false)

    function expand(){
        setOpen(!open)
    }
        const accor =[
            {id: 1,title : "accordion 1", para: "paragraph 1"},
            {id: 2,title : "accordian 2",para : "paragraph 2"}
        ]
        function handleId(id){
            console.log(id)
          //  setOpen(id)
          setOpen(open === id ? null : id)
        }
    return(
        
        <>
        {/* <p className="head" onClick={expand}>Accordion 1</p>
        {open ? <p>What is our return policy?
We offer a 30-day money-back guarantee on all items. Products must be returned in their original packaging, unused, and with all tags attached to qualify for a full refund.</p> : ""} */}

                {
                        accor.map((res)=>{
                        
                            return(<>
                                <p className='head' onClick={()=> handleId(res.id)}>{res.title}</p>
                              
                                {open == res.id ? <p>{res.para}</p> : ""}
                                </>
                            )
                        })
                }

        </>
    )
}
export default Accordion