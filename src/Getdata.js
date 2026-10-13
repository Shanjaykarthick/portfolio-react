import { React, useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import About_task from './Task/About_task';
import Accordion_task from './Task/Accordion_task';
import Contact_task from './Task/Contact_task';
import Home_task from './Task/Home_task';
import Login_task from './Task/Login_task';
import Projects_task from './Task/Projects_task';
import Skills_task from './Task/Skills_task';


const Getdata = () => {
    const [data, SetData] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/c/cec6-2237-457f-8207")
            .then((res) => { SetData(res.data) })
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Id</td>
                    </tr>
                </thead>
            </table>
            <div>
                {
                    data.map((i) => {
                        return (
                            <>
                                <tbody>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.id}</td>
                                </tbody>
                            </>
                        )
                    })
                }
            </div>
            <Routes>
                <Route path='/' element={<Home_task />} />
                <Route path='/About' element={<About_task />} />
                <Route path='/Contact' element={<Contact_task />} />
                <Route path='/Accordian' element={<Accordion_task />} />
                <Route path='/Login' element={<Login_task />} />
                <Route path='/Projects' element={<Projects_task />} />
                <Route path='/Skills' element={<Skills_task />} />

            </Routes>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Accordian'>Accordian</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/Projects'>Projects</Link>
            <Link to='/Skills'>Skills</Link>
        </>
    )
}

export default Getdata