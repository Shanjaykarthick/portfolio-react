import { React, useState } from "react";
import "./Project.css";

const Project = () => {
    const [value, setValue] = useState({
        id: "1",
        name: "sarathi",
        age: 21,
        Dept: "CSE",
        marks: 90
    })
    const [form, setForm] = useState({
        id: "1",
        name: "parthi",
        age: 24,
        Dept: "CSE",
        marks: 95
    })

    // function inc(){

    //     setValue(!value)
    // }
    //  function register(event){
    //     setInput(event.target.value);

    // }

    function handleSubmit(event) {
        event.preventDefault();
        // alert(Input)
        // alert(email)
        // alert(aage)


    }
    // function emaily(event){
    //    setEmail(event.target.value);


    // }
    // function aage(event){
    //    setAge(event.target.value);


    // }
    function change(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }
    function submit(event) {
        event.preventDefault();
        setForm({
            ...form,
            name: value.name,
            age: value.age,
            Dept: value.Dept

        })
    }
    // function cAge(event){
    //     setValue({
    //         ...value,
    //         age:event.target.value
    //     })
    // }
    // function submit(event){
    //      event.preventDefault();
    //     setForm({
    //         ...form,
    //         age:value.age,
    //     })
    // }


    return (
        // <div> // <div style ={{backgroundColor: value ? "black" : "white" , height: "100vh"}}>

        // <span style={{cursor:"pointer"}} onClick={inc}>{value ? "🔆":"🌙"}</span><br/><br></br>
        <div>

            <form onSubmit={submit}>
                <label>Name</label> <input onChange={change} name={"name"} placeholder="Enter your name" /><br></br>
                <label>Dept</label> <input onChange={change} name={"Dept"} /><br></br>
                <label>Age</label> <input onChange={change} name={"age"} /><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Project